export default function Link({ href, className = "", children }) {
  return (
    <a href={href} className={`hover:text-slate-200 text-slate-300 transition ${className}`}>
      {children}
    </a>
  )
}