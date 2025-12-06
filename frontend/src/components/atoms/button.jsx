import Icon from "../atoms/icon"

export default function Button({
    variant = "primary",
    destructive = false,
    onClick,
    icon = null,
    iconColor = null,
    iconPosition = "left",
    iconSize = "md",
    className = "",
    children
}) {
  const baseStyles = "rounded-lg transition font-medium"
  
  const variants = {
    primary: "bg-slate-700 hover:bg-slate-600 text-white px-6 py-2",
    secondary: "bg-transparent hover:bg-slate-300 text-slate-700 border-2 border-slate-700 px-6 py-2",
    tertiary: "bg-transparent text-slate-700",
    icon: "bg-transparent text-slate-700 hover:bg-slate-300 p-2",
  }
  
  const destructiveVariants = {
    primary: "bg-red-700 hover:bg-red-600 text-white px-6 py-2",
    secondary: "bg-transparent hover:bg-red-300 text-red-700 border-2 border-red-500 px-6 py-2",
    tertiary: "bg-transparent text-red-700",
    icon: "bg-transparent text-red-700 hover:bg-red-300 p-2",
  }
  
  const styleClass = destructive ? destructiveVariants[variant] : variants[variant]
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${styleClass} ${className} ${children ? 'flex items-center gap-2' : ''}`}
    >
      {icon && iconPosition === "left" && <Icon name={icon} size={iconSize} color={iconColor} />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} size={iconSize} color={iconColor} />}
    </button>
  )
}