import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useSignUp } from '../useSignUp'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

vi.mock('../../services/auth.service', () => ({
  signUp: vi.fn(),
}))

import { signUp } from '../../services/auth.service'

describe('useSignUp', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes with isLoading false and error null', () => {
    const { result } = renderHook(() => useSignUp())
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('sets isLoading to true during sign up', async () => {
    vi.mocked(signUp).mockImplementation(() => new Promise(() => {}))
    const { result } = renderHook(() => useSignUp())

    act(() => {
      result.current.handleSignUp('new@email.com', 'password123')
    })

    expect(result.current.isLoading).toBe(true)
  })

  it('navigates to signin on successful sign up', async () => {
    vi.mocked(signUp).mockResolvedValueOnce({ user: null, session: null })
    const { result } = renderHook(() => useSignUp())

    await act(async () => {
      await result.current.handleSignUp('new@email.com', 'password123')
    })

    expect(mockNavigate).toHaveBeenCalledWith('/signin')
  })

  it('sets error message on failed sign up', async () => {
    vi.mocked(signUp).mockRejectedValueOnce(new Error('Email already registered'))
    const { result } = renderHook(() => useSignUp())

    await act(async () => {
      await result.current.handleSignUp('existing@email.com', 'password123')
    })

    expect(result.current.error).toBe('Email already registered')
    expect(result.current.isLoading).toBe(false)
  })

  it('sets fallback error message when error is not an Error instance', async () => {
    vi.mocked(signUp).mockRejectedValueOnce('unknown error')
    const { result } = renderHook(() => useSignUp())

    await act(async () => {
      await result.current.handleSignUp('new@email.com', 'password123')
    })

    expect(result.current.error).toBe('Erro ao criar conta')
  })
})
