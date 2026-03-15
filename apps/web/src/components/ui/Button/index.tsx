import type { ButtonProps } from './types'

export function Button({ isLoading, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`w-full py-3 px-4 rounded-xl font-semibold text-foreground bg-primary hover:bg-primary-hover transition-colors 
                duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${props.className ?? ''}`}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  )
}
