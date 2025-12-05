export default function Text({ variant = "body", className = "", children }) {
  const variants = {
    h1: "text-4xl font-bold text-stone-300",
    h2: "text-3xl font-bold text-stone-300",
    h3: "text-xl font-bold text-stone-300",
    body: "text-base text-stone-300",
    small: "text-sm text-stone-300",
  }

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  )
}