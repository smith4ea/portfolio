export default function Text({ variant = "body", className = "", children }) {
  const variants = {
    h1: "text-4xl font-bold text-primary-default",
    h2: "text-3xl font-bold text-primary-default",
    h3: "text-xl font-bold text-primary-default",
    body: "text-base text-primary-default",
    small: "text-sm text-primary-default",
  }

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  )
}