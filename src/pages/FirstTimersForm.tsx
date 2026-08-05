import { FirstTimers } from "../components/form/FirstTimers"
import { Seo } from "../components/seo/Seo"

const FirstTimersForm = () => {
  return (
    <>
      <Seo
        title="First Time at True Worshippers Church? We'd Love to Connect"
        description="Thank you for worshipping with us at True Worshippers Church. Complete our First Timer form so we can welcome you, connect with you, and support your journey of faith."
        url="/firsttimer"
       />
    <div><FirstTimers/></div>
    </>

  )
}

export default FirstTimersForm