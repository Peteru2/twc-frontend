import Experience from "../components/home/Experience"
import Hero from "../components/home/Hero"
import WorshipWithUs from "../components/home/WorshipWithUs"
import Welcome from "../components/home/Welcome"
import Rna from "../components/home/Rna"
import Vision from "../components/home/Vision"
import { Seo } from "../components/seo/Seo";



const Home = () => {
  return (
    <>
 
    <Seo
      title="The Worshippers Church (TWC) - Worship, Word & Transformation"
      description="Welcome to The Worshippers Church (TWC), a Christ-centered church committed to raising believers through biblical teaching, heartfelt worship, prayer, and a vibrant community of faith. Join us in person or online."
      url="/"
  />
    <div>
        <Hero />
        <Welcome />
        <WorshipWithUs />
        <Experience />
        <Rna />
        <Vision />
    
    </div>
    </>

  )
}

export default Home