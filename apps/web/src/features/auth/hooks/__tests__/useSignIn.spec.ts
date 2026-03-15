import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useSignIn } from '../useSignIn'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

vi.mock('../../services/auth.service', () => ({
  signIn: vi.fn(),
}))

import { signIn } from '../../services/auth.service'

describe('useSignIn', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes with isLoading false and error null', () => {
    const { result } = renderHook(() => useSignIn())
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('sets isLoading to true during sign in', async () => {
    vi.mocked(signIn).mockImplementation(() => new Promise(() => {}))
    const { result } = renderHook(() => useSignIn())

    act(() => {
      result.current.handleSignIn('test@email.com', 'password123')
    })

    expect(result.current.isLoading).toBe(true)
  })

  it('navigates to dashboard on successful sign in', async () => {
    vi.mocked(signIn).mockResolvedValueOnce({ user: null, session: null })
    const { result } = renderHook(() => useSignIn())

    await act(async () => {
      await result.current.handleSignIn('test@email.com', 'password123')
    })

    expect(mockNavigate).toHaveBeenCalledWith('/dashboard')
  })

  it('sets error message on failed sign in', async () => {
    vi.mocked(signIn).mockRejectedValueOnce(new Error('Invalid credentials'))
    const { result } = renderHook(() => useSignIn())

    await act(async () => {
      await result.current.handleSignIn('test@email.com', 'wrong')
    })

    expect(result.current.error).toBe('Invalid credentials')
    expect(result.current.isLoading).toBe(false)
  })

  it('sets fallback error message when error is not an Error instance', async () => {
    vi.mocked(signIn).mockRejectedValueOnce('unknown error')
    const { result } = renderHook(() => useSignIn())

    await act(async () => {
      await result.current.handleSignIn('test@email.com', 'wrong')
    })

    expect(result.current.error).toBe('Erro ao realizar o login')
  })
})
