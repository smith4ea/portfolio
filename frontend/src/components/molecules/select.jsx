import Text from "../atoms/text"

export default function Select({ 
  label, 
  options = [],
  value = "",
  onChange,
  className = "" 
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <Text variant="small">{label}</Text>}
      <select
        value={value}
        onChange={onChange}
        className={`bg-primary-default text-secondary border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-tertiary-default transition cursor-pointer font-sans ${className}`}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}