export default function Link({ href, className = "", children }) {
  return (
    <a href={href} className={`text-slate-700 dark:text-zinc-300 transition-colors duration-300 ${className}`}>
      {children}
    </a>
  )
}