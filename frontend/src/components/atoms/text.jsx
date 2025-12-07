export default function Text({ variant = "body", className = "", children }) {
  const variants = {
    h1: "text-4xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300",
    h2: "text-3xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300",
    h3: "text-xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300",
    body: "text-base text-zinc-900 dark:text-zinc-200 transition-colors duration-300",
    small: "text-sm text-zinc-900 dark:text-zinc-300 transition-colors duration-300",
  }

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  )
}