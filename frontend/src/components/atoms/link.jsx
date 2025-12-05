export default function Link({ href, className = "", children }) {
  return (
    <a href={href} className={`hover:text-primary-hover text-primary-default transition ${className}`}>
      {children}
    </a>
  )
}