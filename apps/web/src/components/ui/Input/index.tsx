import type { InputProps } from './types'

export function Input({ label, error, id, name, ...props }: InputProps) {
  const inputId = id ?? name

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        name={name}
        className={`w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors duration-200 ${props.className ?? ''}`}
      />
      {error && <span className="text-sm text-accent">{error}</span>}
    </div>
  )
}
