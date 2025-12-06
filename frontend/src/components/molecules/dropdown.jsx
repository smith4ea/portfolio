import { useState } from 'react'
import Link from "../atoms/link"
import Icon from "../atoms/icon"

export default function Dropdown({ label, items = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-primary-default hover:text-primary-default transition"
      >
        {label}
        <Icon 
          name="ChevronDownIcon" 
          size="sm" 
          color={isOpen ? "text-primary-default" : "text-primary-default"}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-secondary-default border border-neutral-600 rounded-lg shadow-lg min-w-48">
          {items.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="block px-4 py-3 hover:bg-secondary-hover transition first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}