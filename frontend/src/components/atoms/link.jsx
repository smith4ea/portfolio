export default function Link({ href, className = "", children }) {
  return (
    <a href={href} className={`text-slate-700 transition ${className}`}>
      {children}
    </a>
  )
}