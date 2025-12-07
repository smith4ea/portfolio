import Text from '../components/atoms/text'
import Link from '../components/atoms/link'
import Button from '../components/atoms/button'
import NavLink from '../components/molecules/navlink'
import Card from '../components/molecules/card'
import Input from '../components/molecules/input'
import Textarea from '../components/molecules/textarea'
import Icon from '../components/atoms/icon'
import Header from '../components/organisms/header'
import Select from '../components/molecules/select'
import { useState } from 'react'
import Layout from '../components/templates/layout'
import Hero from '../components/organisms/hero'
import designSystemImage from '../assets/images/designsystem.jpg'

export default function DesignSystem() {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [selectedOption, setSelectedOption] = useState("")

    return (
    <Layout>
        <Hero 
            title="Design System"
            subtitle="Under construction: A collection of reusable components and styles for building consistent user interfaces."
            imageUrl={designSystemImage}
            imagePosition="right"
        />

        <Text variant="h1">H1 TITLE</Text>

        <Text variant="h2">Link</Text>
        <Link href="#test">Click me</Link>

        <Text variant="h2">Primary Buttons</Text>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>

        <Text variant="h2">Destructive Buttons</Text>
        <Button variant="primary" destructive>Delete</Button>
        <Button variant="secondary" destructive>Cancel</Button>
        <Button variant="tertiary" destructive>Remove</Button>

        <Text variant="h2">Cards</Text>
        <Card title="Card Title" description="This is a generic card that can be used anywhere" />
        <Card title="Another Card" description="Works for projects, team members, features, etc." />

        <Text variant="h2">Input</Text>
        <Input 
            label="Email Address" 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-slate-700">Current value: {email}</p>

        <Text variant="h2">Textarea</Text>
        <Textarea 
            label="Message" 
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
        />
        <p className="text-slate-700">Character count: {message.length}</p>

        <Text variant="h2">Icons</Text>
        <Icon name="StarIcon" variant="solid" size="sm" color="text-primary-default" />
        <Icon name="StarIcon" variant="solid" size="lg" color="text-error-default" />
        <Icon name="CheckIcon" variant="solid" size="lg" color="text-tertiary-default" />

        <Text variant="h2">Buttons and Cards with Icons</Text>
        <Button icon="StarIcon" variant="primary">
            Favorite
        </Button>
        <Button icon="ArrowRightIcon" variant="secondary" iconPosition="right">
            Next
        </Button>
        <Card 
            icon="SparklesIcon"
            title="Amazing Feature" 
            description="This card has an icon at the top"
            iconColor="text-tertiary-default"
        />

        <Text variant="h2">Icon Buttons</Text>
        <Button 
            variant="icon" 
            icon="RocketLaunchIcon"
        />
        <Button 
            variant="icon" 
            icon="TrashIcon"
            destructive
        />

        <Text variant="h2">Select</Text>
        <Select 
            label="Choose an option"
            options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            ]}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
        />
    </Layout>
    )
}