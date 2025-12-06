export default function Text({ variant = "body", className = "", children }) {
  const variants = {
    h1: "text-4xl font-bold text-zinc-900",
    h2: "text-3xl font-bold text-zinc-900",
    h3: "text-xl font-bold text-zinc-900",
    body: "text-base text-zinc-900",
    small: "text-sm text-zinc-900",
  }

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  )
}