import { Prayer } from "../components/form/Prayer"
import { Seo } from "../components/seo/Seo"

const PrayerRequest = () => {
  return (
    <>
    <Seo
        title="Prayer Requests - Let Us Stand with You in Prayer"
        description="Submit your prayer requests to True Worshippers Church. Our prayer team is committed to standing with you in faith and believing God for His divine intervention."
        url="/prayer"
      />
    <div>
        <Prayer />
    </div>
    </>

  )
}

export default PrayerRequest