import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SignUpForm } from '../index'

describe('SignUpForm', () => {
  const defaultProps = {
    onSubmit: vi.fn(),
    isLoading: false,
    error: null,
  }

  it('renders email and password inputs', () => {
    render(<SignUpForm {...defaultProps} />)
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<SignUpForm {...defaultProps} />)
    expect(screen.getByRole('button', { name: /criar conta/i })).toBeInTheDocument()
  })

  it('shows loading state on button when isLoading is true', () => {
    render(<SignUpForm {...defaultProps} isLoading={true} />)
    expect(screen.getByRole('button', { name: /carregando/i })).toBeInTheDocument()
  })

  it('shows error message when error is provided', () => {
    render(<SignUpForm {...defaultProps} error="E-mail já cadastrado" />)
    expect(screen.getByText('E-mail já cadastrado')).toBeInTheDocument()
  })

  it('calls onSubmit with email and password on form submit', async () => {
    const onSubmit = vi.fn()
    render(<SignUpForm {...defaultProps} onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('E-mail'), 'new@email.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'password123')
    await userEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    expect(onSubmit).toHaveBeenCalledWith('new@email.com', 'password123')
  })
})
