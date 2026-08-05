import EventCarousel from "../components/event/Hero"
import { OurEvents } from "../components/event/OurEvents"
import UpcomingEvents from "../components/event/UpcomingEvents"
import { Seo } from "../components/seo/Seo"
const Event = () => {
  return (
    <>
      <Seo
  title="Our Events - Worship Services, Conferences & Church Programs"
  description="Stay updated with upcoming worship services, conferences, special programs, and church events at True Worshippers Church."
  url="/event"
/>
    <div>
        <EventCarousel />
        <UpcomingEvents />
        <OurEvents />
    </div>
    </>

  )
}

export default Event