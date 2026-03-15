export interface SignUpFormProps {
  onSubmit: (email: string, password: string) => void
  isLoading: boolean
  error: string | null
}
