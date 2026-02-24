import { motion } from "framer-motion"
import type { EventItem } from "../types"

type Props = {
  event: EventItem
reverse?: boolean
}

export const OurEventsCard = ({ event, reverse }: Props) => {
  return (
    <div className="">
       
    <div className="grid md:grid-cols-2 bg-gray-50  md:w-5xl mx-auto items-center md:px-0   my-5">
      
      {/* TEXT */}
  
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`md:py-0 py-4 px-4 ${reverse ? "md:order-2 " : " md:order-1"}`}
      >
        <p className="text-xs text-center tracking-widest lato text-red-500 uppercase mb-4">
          {event.tag}
        </p>

        <h2 className="text-xl md:text-2xl text-center viga font-bold mb-[4px]">
          {event.title1}
        </h2>
        
        <h2 className="text-xl md:text-2xl text-center text-red-600 viga font-bold mb-6">
          {event.title2}
        </h2>

        <p className="text-gray-600 text-center leading-relaxed lato  w-[400px] mx-auto">
          {event.description}
        </p>
      </motion.div>
      

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${reverse ? "md:order-1" : "md:order-2"}`}
      >
        <img
          src={event.image}
          alt={event.title1}
          className="md:w-full h-auto object-cover"
        />
      </motion.div>
    </div>
    </div>
  )
}