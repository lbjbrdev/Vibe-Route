import { describe, it, expect, vi, beforeEach } from 'vitest'
import { signIn, signUp, signOut } from '../auth.service'

vi.mock('../../../../lib/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
    },
  },
}))

import { supabase } from '../../../../lib/supabase'

describe('auth.service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('signIn', () => {
    it('calls supabase signInWithPassword with correct credentials', async () => {
      vi.mocked(supabase.auth.signInWithPassword).mockResolvedValueOnce({
        data: { user: { id: '1' }, session: null },
        error: null,
      } as never)

      await signIn('test@email.com', 'password123')

      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'test@email.com',
        password: 'password123',
      })
    })

    it('throws error when supabase returns an error', async () => {
      const mockError = new Error('Invalid credentials')
      vi.mocked(supabase.auth.signInWithPassword).mockResolvedValueOnce({
        data: { user: null, session: null },
        error: mockError,
      } as never)

      await expect(signIn('test@email.com', 'wrong')).rejects.toThrow('Invalid credentials')
    })
  })

  describe('signUp', () => {
    it('calls supabase signUp with correct credentials', async () => {
      vi.mocked(supabase.auth.signUp).mockResolvedValueOnce({
        data: { user: { id: '1' }, session: null },
        error: null,
      } as never)

      await signUp('new@email.com', 'password123')

      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: 'new@email.com',
        password: 'password123',
      })
    })

    it('throws error when supabase returns an error', async () => {
      const mockError = new Error('Email already registered')
      vi.mocked(supabase.auth.signUp).mockResolvedValueOnce({
        data: { user: null, session: null },
        error: mockError,
      } as never)

      await expect(signUp('existing@email.com', 'password123')).rejects.toThrow('Email already registered')
    })
  })

  describe('signOut', () => {
    it('calls supabase signOut', async () => {
      vi.mocked(supabase.auth.signOut).mockResolvedValueOnce({
        error: null,
      } as never)

      await signOut()

      expect(supabase.auth.signOut).toHaveBeenCalled()
    })

    it('throws error when supabase returns an error', async () => {
      const mockError = new Error('Sign out failed')
      vi.mocked(supabase.auth.signOut).mockResolvedValueOnce({
        error: mockError,
      } as never)

      await expect(signOut()).rejects.toThrow('Sign out failed')
    })
  })
})
