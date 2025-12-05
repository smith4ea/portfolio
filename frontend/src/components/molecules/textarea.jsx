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
      {label && <Text variant="small" className="text-primary-default">{label}</Text>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`bg-primary-default text-secondary-default rounded-lg px-4 py-2 focus:outline-none border focus:border-tertiary-default transition resize-none ${className}`}
      />
    </div>
  )
}