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
    primary: "bg-primary-default hover:bg-primary-hover text-dark px-6 py-2",
    secondary: "bg-transparent hover:bg-secondary-hover text-primary-default border border-primary-default px-6 py-2",
    tertiary: "bg-transparent text-primary-default",
    icon: "bg-transparent text-primary-default hover:bg-secondary-hover p-2",
  }
  
  const destructiveVariants = {
    primary: "bg-error-default hover:bg-error-hover text-white px-6 py-2",
    secondary: "bg-transparent hover:bg-secondary-hover text-error-default border border-error-default px-6 py-2",
    tertiary: "bg-transparent text-error-default",
    icon: "bg-transparent hover:bg-secondary-hover text-error-default p-2",
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