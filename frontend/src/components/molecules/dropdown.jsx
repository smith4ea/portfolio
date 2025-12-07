import { useState } from 'react'
import Link from "../atoms/link"
import Icon from "../atoms/icon"

export default function Dropdown({ label, items = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors duration-300"
      >
        {label}
        <Icon 
          name="ChevronDownIcon" 
          size="sm" 
          color={isOpen ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-900 dark:text-zinc-100"}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-slate-800 border-2 border-neutral-600 dark:border-slate-600 rounded-lg shadow-lg min-w-48">
          {items.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="block px-4 py-3 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg no-underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}