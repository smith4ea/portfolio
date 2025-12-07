import Text from "../atoms/text"

export default function Input({ 
  label, 
  type = "text", 
  placeholder = "", 
  value = "",
  onChange,
  className = "" 
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <Text variant="small">{label}</Text>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-white dark:bg-slate-800 text-slate-700 dark:text-zinc-100 rounded-lg px-4 py-2 focus:outline-none border-2 border-slate-300 dark:border-slate-600 focus:border-slate-600 dark:focus:border-slate-500 transition-colors duration-300 ${className}`}
      />
    </div>
  )
}