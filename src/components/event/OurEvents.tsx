
import { events } from "../../data/ourEvents"
import { OurEventsCard } from "./OurEventsCard"

export const OurEvents = () => {
  return (
    <section className=" bg-white">
         <div  className="flex justify-center  mt-16 w-full">
            <div>
         <h2 className="md:text-2xl text-xl font-bold text-center viga tracking-wide">
        OUR <span className="text-red-600">EVENTS</span>
      </h2>
      <div>
        <img src="/line.png" className="mt-2  w-40 md:w-60 origin-center" />
      </div>
      </div>
    
    </div>
      <div className="">
        {events.map((event, index) => (
          <OurEventsCard
            key={event.id}
            event={event}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
 
  )
}