import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/auth.service'

export function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function handleSignIn(email: string, password: string) {
    setIsLoading(true)
    setError(null)
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao realizar o login')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleSignIn, isLoading, error }
}