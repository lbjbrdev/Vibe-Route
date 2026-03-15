import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Input } from '../index'

describe('Input', () => {
  it('renders label correctly', () => {
    render(<Input label="E-mail" />)
    expect(screen.getByText('E-mail')).toBeInTheDocument()
  })

  it('renders input element', () => {
    render(<Input label="E-mail" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows error message when error prop is provided', () => {
    render(<Input label="E-mail" error="Campo obrigatório" />)
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('does not show error message when error prop is not provided', () => {
    render(<Input label="E-mail" />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('accepts user input', async () => {
    render(<Input label="E-mail" />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'test@email.com')
    expect(input).toHaveValue('test@email.com')
  })

  it('renders with placeholder', () => {
    render(<Input label="E-mail" placeholder="seu@email.com" />)
    expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument()
  })
})
