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
    primary: "bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-700 text-white px-6 py-2 transition-colors duration-300",
    secondary: "bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-zinc-200 border-2 border-slate-700 dark:border-slate-600 px-6 py-2 transition-colors duration-300",
    tertiary: "bg-transparent text-slate-700 dark:text-zinc-200 transition-colors duration-300",
    icon: "bg-transparent text-slate-700 dark:text-zinc-200 hover:bg-slate-300 dark:hover:bg-slate-700 p-2 transition-colors duration-300",
  }
  
  const destructiveVariants = {
    primary: "bg-red-700 hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-700 text-white px-6 py-2 transition-colors duration-300",
    secondary: "bg-transparent hover:bg-red-300 dark:hover:bg-red-900 text-red-700 dark:text-red-400 border-2 border-red-700 dark:border-red-800 px-6 py-2 transition-colors duration-300",
    tertiary: "bg-transparent text-red-700 dark:text-red-400 transition-colors duration-300",
    icon: "bg-transparent text-red-700 dark:text-red-400 hover:bg-red-300 dark:hover:bg-red-900 p-2 transition-colors duration-300",
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