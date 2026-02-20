import { motion } from "framer-motion";
import { Globe } from "lucide-react";


const services = [
  {
    title: "SUNDAY SERVICE",
    time1: "First Service (English) – 7:30 AM",
    time2: "Second Service (English & Yoruba) – 9:00 AM",
    image:
      "/wwu1.jpg",
  },
  {
    title: "MONDAYS – 5:00 PM",
    time1: "Interdenominational Faith Clinic",
    time2: "(Word, Prayer & Deliverance)",
    image:
      "/wwu2.jpg",
  },
  {
    title: "WEDNESDAYS – 5:00 PM",
    time1: "Midweek Teaching & Prayer",
    image:
      "/wwu3.jpg",
  },
  {
    title: "SATURDAYS – 4:00 PM",
   time1: "Workers Training",
    image:
      "/wwu4.jpg",
  },
];

export default function WorshipWithUs() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    className="relative lato w-full min-h-screen pb-16 overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 "
      >
        <img
          src="/worshipWithUs.jpg"
          alt="Church background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />

      {/* Content Wrapper */}
      <div className="relative z-10 pt-[300px] flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 "
        >
            <div className="w-full justify-center flex mb-2">
                <div className="bg-gray-50/20 flex rounded-full w-40 items-center font-bold justify-center px-6 py-[6px]">
                       <Globe className="text-[#E80F1A] mr-2 text-[10px]" />
                       <h4 className="lato text-gray-100 text-[10px]"> SERVICE TIME</h4>
                     </div>

                     </div>

          <h1 className="text-white viga text-4xl md:text-6xl font-bold mb-4">
            WORSHIP WITH US!
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            Rooted in God's Word. United in worship. Committed to Christ.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="
            w-full
            flex
            lg:justify-center
            gap-6
            no-scrollbar
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            
            px-2
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                md:w-[240px] 
                w-[300px]          
                md:h-[320px]
                h-[400px]
                flex-shrink-0       
                snap-start
                rounded-xl
                no-scrollbar
                overflow-hidden
                cursor-pointer
                group
              "
            >
              {/* Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Red Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-600/10 to-transparent opacity-90 group-hover:opacity-100 transition duration-500" />

              {/* Text */}
              <div className="absolute md:top-58 top-74  left-4 text-white">
                <h3 className="font-semibold text-left text-lg mb-[2px]">
                  {service.title}
                </h3>

                <div className="text-left">
                <p className="text-xs  opacity-80">{service.time1}</p>
                <p className="text-xs opacity-80">{service.time2}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
