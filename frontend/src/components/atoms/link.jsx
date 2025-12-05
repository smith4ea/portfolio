export default function Link({ href, className = "", children }) {
  return (
    <a href={href} className={`hover:text-slate-200 text-off-white transition ${className}`}>
      {children}
    </a>
  )
}