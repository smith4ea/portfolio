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
        className={`bg-primary-default text-secondary-default rounded-lg px-4 py-2 focus:outline-none border focus:border-tertiary-default transition ${className}`}
      />
    </div>
  )
}