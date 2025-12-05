export default function Button({
    variant = "primary",
    destructive = false,
    onClick,
    className = "",
    children
}) {

const baseStyles = "px-6 py-2 rounded-lg transition font-medium"

const variants = {
    primary: "bg-stone-300 text-neutral-800",
    secondary: "bg-transparent text-stone-300 border border-stone-300",
    tertiary: "bg-transparent text-stone-300",
}

const destructiveVariants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-transparent hover:bg-slate-600 text-red-400 border border-red-600",
    tertiary: "bg-transparent hover:bg-red-900 text-red-400 border border-red-600",
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