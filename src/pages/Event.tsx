import EventCarousel from "../components/event/Hero"
import { OurEvents } from "../components/event/OurEvents"
import UpcomingEvents from "../components/event/UpcomingEvents"
const Event = () => {
  return (
    <div>
        <EventCarousel />
        <UpcomingEvents />
        <OurEvents />
    </div>
  )
}

export default Event