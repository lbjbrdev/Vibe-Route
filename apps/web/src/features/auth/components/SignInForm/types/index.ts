export interface SignInFormProps {
  onSubmit: (email: string, password: string) => void
  isLoading: boolean
  error: string | null
}
