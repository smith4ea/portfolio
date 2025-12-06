import { useState } from 'react'
import Link from "../atoms/link"
import Icon from "../atoms/icon"

export default function Dropdown({ label, items = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-slate-700 hover:text-slate-800 transition"
      >
        {label}
        <Icon 
          name="ChevronDownIcon" 
          size="sm" 
          color={isOpen ? "zinc-900" : "zinc-900"}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border-2 border-neutral-600 rounded-lg shadow-lg min-w-48">
          {items.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="block px-4 py-3 hover:bg-slate-100 transition first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}