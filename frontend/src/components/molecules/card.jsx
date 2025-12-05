import Text from "../atoms/text"

export default function Card({ title, description }) {
  return (
    <div className="bg-neutral-700 p-6 rounded-lg hover:bg-neutral-600 transition space-y-2">
      <Text variant="h3">
        {title}
      </Text>
      <Text variant="small">
        {description}
      </Text>
    </div>
  )
}