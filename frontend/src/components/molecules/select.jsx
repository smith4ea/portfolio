import { useState, useRef, useEffect } from 'react'
import Text from "../atoms/text"
import Icon from "../atoms/icon"

export default function Select({ 
  label, 
  options = [],
  value = "",
  onChange,
  className = "" 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAbove, setIsAbove] = useState(false)
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)
  
  const selectedOption = options.find(opt => opt.value === value)
  const displayLabel = selectedOption ? selectedOption.label : "Select an option"

  useEffect(() => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const dropdownHeight = dropdownRef.current.offsetHeight
      const windowHeight = window.innerHeight
      
      const spaceBelow = windowHeight - buttonRect.bottom
      const hasSpaceBelow = spaceBelow > dropdownHeight + 20
      
      setIsAbove(!hasSpaceBelow)
    }
  }, [isOpen])

  return (
    <div className="flex flex-col gap-2">
      {label && <Text variant="small" className="text-primary-default">{label}</Text>}
      
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-primary-default text-secondary border rounded-lg px-4 py-2 focus:outline-none focus:border-tertiary-default transition cursor-pointer font-sans flex justify-between items-center ${className}`}
        >
          <span>{displayLabel}</span>
          <Icon 
            name="ChevronDownIcon" 
            size="sm" 
            color={isOpen ? "text-dark" : "text-dark"}
          />
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className={`absolute left-0 right-0 bg-primary-default border rounded-lg shadow-lg z-50 ${
              isAbove ? 'bottom-full mb-2' : 'top-full mt-1'
            }`}
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  onChange({ target: { value: option.value } })
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 hover:bg-stone-400 transition font-sans ${
                  value === option.value ? 'bg-stone-400' : ''
                } ${index === 0 ? 'rounded-t-lg' : ''} ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}