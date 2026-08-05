import SermonsSection from '../components/sermons/SermonsSection'
import { Seo } from '../components/seo/Seo'

const Sermons = () => {
  return (
    <>
      <Seo
        title="Sermons - Biblical Teachings from True Worshippers Church"
        description="Listen to inspiring sermons and biblical teachings from True Worshippers Church. Grow in your faith through Christ-centered messages rooted in God's Word."
        url="/sermons"
      />
    <div>
         <SermonsSection />
    </div>
    </>

  )
}

export default Sermons