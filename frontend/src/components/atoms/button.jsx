export default function Button({
    variant = "primary",
    destructive = false,
    onClick,
    className = "",
    children
}) {

const baseStyles = "rounded-lg transition font-medium"

const variants = {
    primary: "bg-stone-300 text-neutral-800 px-6 py-2",
    secondary: "bg-transparent text-stone-300 border border-stone-300 px-6 py-2" ,
    tertiary: "bg-transparent text-stone-300",
}

const destructiveVariants = {
    primary: "bg-red-600 text-white px-6 py-2",
    secondary: "bg-transparent text-red-600 border border-red-600 px-6 py-2",
    tertiary: "bg-transparent text-red-600",
}

const styleClass = destructive ? destructiveVariants[variant] : variants[variant]

return (
    <button 
        onClick={onClick} 
        className={`${baseStyles} ${styleClass} ${className}`}
    >
        {children}
    </button>
)
}