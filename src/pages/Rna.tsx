import AboutRna from '../components/rna/AboutRna'
import Family from '../components/rna/Family'
import Hero from '../components/rna/Hero'
import Leadership from '../components/rna/Leadership'
import Ministry from '../components/rna/Ministry'
import { Seo } from '../components/seo/Seo'

const Rna = () => {
  return (
    <>
    <Seo
      title="Rev. Dr. Niyi Adebayo | True Worshippers Church"
      description="Discover the ministry, teachings, and vision of Rev. Niyi Adebayo, the lead pastor of True Worshippers Church, and explore resources that inspire spiritual growth and Christ-centered living."
      url="/rna"
    />
    <div>
        <Hero />
        <AboutRna />
        <Ministry />
        <Leadership />
        <Family />
    </div>
    </>

  )
}

export default Rna