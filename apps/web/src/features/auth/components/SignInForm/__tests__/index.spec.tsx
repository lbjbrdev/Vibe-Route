import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SignInForm } from '../index'

describe('SignInForm', () => {
  const defaultProps = {
    onSubmit: vi.fn(),
    isLoading: false,
    error: null,
  }

  it('renders email and password inputs', () => {
    render(<SignInForm {...defaultProps} />)
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<SignInForm {...defaultProps} />)
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('shows loading state on button when isLoading is true', () => {
    render(<SignInForm {...defaultProps} isLoading={true} />)
    expect(screen.getByRole('button', { name: /carregando/i })).toBeInTheDocument()
  })

  it('shows error message when error is provided', () => {
    render(<SignInForm {...defaultProps} error="Credenciais inválidas" />)
    expect(screen.getByText('Credenciais inválidas')).toBeInTheDocument()
  })

  it('calls onSubmit with email and password on form submit', async () => {
    const onSubmit = vi.fn()
    render(<SignInForm {...defaultProps} onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('E-mail'), 'test@email.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'password123')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(onSubmit).toHaveBeenCalledWith('test@email.com', 'password123')
  })
})
