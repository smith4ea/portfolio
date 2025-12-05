import Icon from "../atoms/icon"

export default function Button({
    variant = "primary",
    destructive = false,
    onClick,
    icon = null,
    iconColor = null,
    iconPosition = "left",
    className = "",
    children
}) {

const baseStyles = "rounded-lg transition font-medium"

const variants = {
    primary: "bg-primary-default text-dark px-6 py-2",
    secondary: "bg-transparent text-primary-default border border-primary-default px-6 py-2" ,
    tertiary: "bg-transparent text-primary-default",
}

const destructiveVariants = {
    primary: "bg-error-default text-white px-6 py-2",
    secondary: "bg-transparent text-error-default border border-error-default px-6 py-2",
    tertiary: "bg-transparent text-error-default",
}

const styleClass = destructive ? destructiveVariants[variant] : variants[variant]

return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${styleClass} ${className} flex items-center gap-2`}
    >
      {icon && iconPosition === "left" && <Icon name={icon} size="md" color={iconColor} />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} size="md" color={iconColor} />}
    </button>
)
}