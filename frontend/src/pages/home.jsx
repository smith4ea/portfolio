import Layout from '../components/templates/layout'
import Button from '../components/atoms/button'
import Text from '../components/atoms/text'
import Hero from '../components/organisms/hero'
import heroImage from '../assets/images/heroimage.jpg'
import Card from '../components/molecules/card'

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Hey 👋😎 I'm Evan"
        subtitle="I'm a UX Designer/Engineer passionate about building beautiful, functional web applications.
        I love learning new technologies and creating intuitive user experiences."
        imageUrl={heroImage}
        imagePosition="bottom"
        primaryButtonText="View My Work"
        primaryButtonHref="/projects"
        secondaryButtonText="Get in Touch"
        secondaryButtonHref="#contact"
      />
    </Layout>
  )
}