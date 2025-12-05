import NavLink from "../molecules/navlink"

export default function Header() {
  return (
    <nav className="bg-secondary-default shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-default">Evan Smith</h1>
        <ul className="flex gap-6 list-none m-0 p-0">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </div>
    </nav>
  )
}