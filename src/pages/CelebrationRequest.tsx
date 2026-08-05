import { Celebration } from "../components/form/Celebration"
import { Seo } from "../components/seo/Seo"
const CelebrationRequest = () => {
  return (
    <>
      <Seo
        title="Celebrations | Share Your Joy with the Church Family"
        description="Share your birthdays, anniversaries, thanksgiving, and other special occasions with True Worshippers Church so we can celebrate God's faithfulness together."
        url="/celebration"
      />

    <div><Celebration /></div>
    </>
  )
}

export default CelebrationRequest