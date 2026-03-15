import type { FormEvent } from 'react'
import { Input } from '../../../../components/ui/Input'
import { Button } from '../../../../components/ui/Button'
import type { SignUpFormProps } from './types'

export function SignUpForm({ onSubmit, isLoading, error }: SignUpFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    onSubmit(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input name="email" label="E-mail" type="email" placeholder="seu@email.com" required />
      <Input name="password" label="Senha" type="password" placeholder="••••••••" required />
      {error && <span className="text-sm text-accent">{error}</span>}
      <Button type="submit" isLoading={isLoading}>Criar conta</Button>
    </form>
  )
}
