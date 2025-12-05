import Link from "../atoms/link"

export default function NavLink({ href, children }) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}