import { Link } from 'react-router-dom'
import { SignUpForm } from '../../features/auth/components/SignUpForm'
import { useSignUpPage } from './hooks/useSignUpPage'

export function SignUpPage() {
  const { handleSignUp, isLoading, error } = useSignUpPage()

  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-background" />
        <div className="relative z-10 flex flex-col justify-center px-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">VibeRoute</h1>
          <p className="text-xl text-foreground/70">Planeje seu rolê perfeito.</p>
          <div className="mt-12 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✦</span>
              <span className="text-foreground/60">Roteiros inteligentes com IA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✦</span>
              <span className="text-foreground/60">Lugares curados na sua cidade</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✦</span>
              <span className="text-foreground/60">Sua noite, do seu jeito</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Crie sua conta</h2>
            <p className="text-muted">Comece a planejar seus rolês agora</p>
          </div>
          <SignUpForm onSubmit={handleSignUp} isLoading={isLoading} error={error} />
          <p className="mt-6 text-center text-muted text-sm">
            Já tem uma conta?{' '}
            <Link to="/signin" className="text-primary hover:text-primary-hover font-medium transition-colors">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}