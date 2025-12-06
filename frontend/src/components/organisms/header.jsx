import { useState } from 'react'
import NavLink from "../molecules/navlink"
import Dropdown from "../molecules/dropdown"
import Button from "../atoms/button"
import Icon from "../atoms/icon"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const usefulLinks = [
    { label: "All", href: "/projects" },
    { label: "Project 1", href: "/docs" },
    { label: "Project 2", href: "/about" },
    { label: "Project 3", href: "/test" },
  ]

  return (
    <nav className="sticky top-0 bg-secondary-default shadow-lg z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Icon name="WindowIcon" size="md" color="text-tertiary-default" />
          <h1 className="text-2xl font-bold text-primary-default p-1 ">Evan Smith</h1>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          <NavLink href="/">Home</NavLink>
          <Dropdown label="Projects" items={usefulLinks} />
          <NavLink href="/design-system">Design System</NavLink>
        </ul>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button 
            variant="icon" 
            icon="SunIcon" 
            onClick={() => {/* dark mode toggle will go here */}}
          />
          <Button 
            variant="icon" 
            icon={isOpen ? "XMarkIcon" : "Bars3Icon"} 
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Desktop Theme Toggle */}
        <Button 
          variant="icon" 
          icon="SunIcon" 
          className="hidden md:flex"
          onClick={() => {/* dark mode toggle will go here */}}
        />
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-secondary-default border-t border-neutral-600">
          <ul className="flex flex-col gap-4 p-6 list-none">
            <NavLink href="/">Home</NavLink>
            <Dropdown label="Projects" items={usefulLinks} />
            <NavLink href="/design-system">Design System</NavLink>
          </ul>
        </div>
      )}
    </nav>
  )
}