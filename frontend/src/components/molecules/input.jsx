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
        className={`bg-stone-300 text-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-stone-300 transition ${className}`}
      />
    </div>
  )
}