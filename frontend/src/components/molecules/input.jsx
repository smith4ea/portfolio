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
        className={`bg-white text-slate-700 rounded-lg px-4 py-2 focus:outline-none border-2 focus:border-slate-600 transition ${className}`}
      />
    </div>
  )
}