import { events } from "../../data/upcomingEvent";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const UpcomingEvents = () => {
  return (
    <div className="pt-10 bg-red px-4 lg:px-40 ">
      <h2 className="md:text-2xl text-xl font-bold text-center viga tracking-wide">
        UPCOMING <span className="text-red-600">EVENTS</span>
      </h2>
      <div className="flex justify-center w-full">
        <img src="/line.png" className="mt-2  w-60 md:w-80 origin-center" />
      </div>


      <div className="max-w-4xl mx-auto mt-4 rounded-xl">
        <div className="grid md:grid-cols-2 gap-6">
        {events.map((events, index) => (
          <motion.div
            key={events.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover="hover"
            className=" overflow-hidden  shadow-sm rounded-xl"
          >
            <div className="flex justify-center ">
            <motion.img
              src={events.flier[1]}
              alt={events.title}
              className=" h-[500px]  md:object-cover"
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            </div>

            <div className="lato p-4 border-gray-300">
              <p className="mb-4 font-bold">{events.title}</p>
              <div className="mt-4">
                <p className="flex items-center text-[12px]">
                  <Calendar size={"14"} className="mr-[4px]" />{" "}
                  {events.dateDisplay}
                </p>
                <p className="flex items-center text-[13px] mt-2">
                  <MapPin size={"14"} className="mr-[4px]" /> {events.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UpcomingEvents;
