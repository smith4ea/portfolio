import Layout from '../components/templates/layout'
import Hero from '../components/organisms/hero'
import Card from '../components/molecules/card'

export default function Projects() {
  return (
    <Layout>
        <Hero 
          title="Projects"
          subtitle="Take a look at my collection of my work as a UX Designer 👇"
        />
        <Card title="Project 1" description="Description of Project 1" />
        <Card title="Project 2" description="Description of Project 2" />
        <Card title="Project 3" description="Description of Project 3" />
    </Layout>
  )
}