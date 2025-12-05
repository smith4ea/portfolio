import Text from './components/atoms/text'
import Link from './components/atoms/link'
import Button from './components/atoms/button'

export default function App() {
  return (
    <div className="bg-neutral-800 min-h-screen p-8 space-y-4 space-x-8">

      <Text variant="h1">TEST H1</Text>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      <Link href="#test">Click me</Link>

      <Text variant="h2">Primary Buttons</Text>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>

      <Text variant="h1">Destructive Buttons</Text>
      <Button variant="primary" destructive>Delete</Button>
      <Button variant="secondary" destructive>Cancel</Button>
      <Button variant="tertiary" destructive>Remove</Button>
    </div>
  )
}