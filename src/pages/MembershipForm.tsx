import { Members } from "../components/form/Members"
import { Seo } from "../components/seo/Seo"
const MembershipForm = () => {
  return (
    <>
    <Seo
        title="Become a Member | Join the True Worshippers Church Family"
        description="Become part of the True Worshippers Church family. Discover opportunities to grow spiritually, serve faithfully, and build meaningful relationships."
        url="/members"
      />
    <div>
        <Members />
    </div>
    </>

  )
}

export default MembershipForm