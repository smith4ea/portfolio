import Text from "../atoms/text"
import Icon from "../atoms/icon"

export default function Card({
    title,
    description,
    icon = null,
    iconColor = null
}) {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 space-y-2">
      <div className="flex items-center gap-2">
        {icon && <Icon name={icon} size="lg" color={iconColor} />}
        <Text variant="h3">
          {title}
        </Text>
      </div>
      <Text variant="small">
        {description}
      </Text>
    </div>
  )
}