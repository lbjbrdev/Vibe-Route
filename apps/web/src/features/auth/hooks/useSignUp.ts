import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../services/auth.service'

export function useSignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function handleSignUp(email: string, password: string) {
    setIsLoading(true)
    setError(null)
    try {
      await signUp(email, password)
      navigate('/signin')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar conta')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleSignUp, isLoading, error }
}
