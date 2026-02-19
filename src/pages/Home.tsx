import Experience from "../components/home/Experience"
import Hero from "../components/home/Hero"
import WorshipWithUs from "../components/home/WorshipWithUs"
import Welcome from "../components/home/Welcome"
import Rna from "../components/home/Rna"
import Vision from "../components/home/Vision"
import NewLetterGive from "../components/home/NewLetterGive"

const Home = () => {
  return (
    <div>
        <Hero />
        <Welcome />
        <WorshipWithUs />
        <Experience />
        <Rna />
        <Vision />
        <NewLetterGive />
    </div>
  )
}

export default Home