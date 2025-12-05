import * as HeroIcons from '@heroicons/react/24/solid'
import * as HeroIconsOutline from '@heroicons/react/24/outline'

export default function Icon({ 
  name, 
  variant = "solid",
  size = "md",
  className = ""
}) {
  const icons = variant === "solid" ? HeroIcons : HeroIconsOutline
  const IconComponent = icons[name]

  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
    "2xl": "w-12 h-12",
  }

  if (!IconComponent) {
    return <span>Icon not found: {name}</span>
  }

  return (
    <IconComponent className={`${sizes[size]} ${className}`} />
  )
}