import Colors from '../components/about/Colors'
import Hero from '../components/about/Hero'
import Journey from '../components/about/Journey'
import Mandate from '../components/about/Mandate'
import Story from '../components/about/Story'
import { Seo } from "../components/seo/Seo";


const About = () => {
  return (
    <>
    <Seo
  title="Our Vision, Mission & Beliefs"
  description="Learn about True Worshippers Church (TWC), our vision, mission, core beliefs, leadership, and our commitment to raising disciples who worship God in spirit and in truth."
  url="/about"
/>
    <div>
        <Hero />
        <Story />
        <Journey />
        <Mandate />
        <Colors />
    </div>
    </>

  )
}

export default About