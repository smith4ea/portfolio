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
      {label && <Text variant="small" className="text-slate-700">{label}</Text>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`bg-white text-slate-700 rounded-lg px-4 py-2 focus:outline-none border-2 focus:border-slate-600 transition resize-none ${className}`}
      />
    </div>
  )
}