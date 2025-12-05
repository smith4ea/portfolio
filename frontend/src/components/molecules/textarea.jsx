import Text from "../atoms/text"

export default function Textarea({ 
  label, 
  placeholder = "", 
  value = "",
  onChange,
  rows = 4,
  className = "" 
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <Text variant="small" className="text-stone-300">{label}</Text>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`bg-stone-300 text-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-stone-300 transition resize-none ${className}`}
      />
    </div>
  )
}