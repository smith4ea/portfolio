import Text from "../atoms/text"
import Icon from "../atoms/icon"

export default function Card({
    title,
    description,
    icon = null,
    iconColor = null
}) {
  return (
    <div className="bg-neutral-700 p-6 rounded-lg hover:bg-neutral-600 transition space-y-2">
      <div className="flex items-center gap-2">
        {icon && <Icon name={icon} size="lg" color={iconColor} />}
        <Text variant="h3" className="text-primary-default">
          {title}
        </Text>
      </div>
      <Text variant="small" className="text-primary-default">
        {description}
      </Text>
    </div>
  )
}