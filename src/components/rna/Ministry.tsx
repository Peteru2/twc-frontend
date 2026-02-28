import { motion } from "framer-motion";



const services = [
  {
    title: "SUNDAY SERVICE",
    time1: "First Service (English) – 7:30 AM",
    time2: "Second Service (English & Yoruba) – 9:00 AM",
    image:
      "/min1.jpg",
      style:" border-red-500/40 rotate-3"
  },
  
  {
    title: "MONDAYS – 5:00 PM",
    time1: "Interdenominational Faith Clinic",
    time2: "(Word, Prayer & Deliverance)",
    image:
      "/min2.jpg",
      style:" border-violet-400/40 -rotate-1"

  },
  {
    title: "WEDNESDAYS – 5:00 PM",
    time1: "Midweek Teaching & Prayer",
    image:
      "/min3.jpg",
      style:" border-red-500/40 rotate-3"

  },
 
];

export default function Ministry() {
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
          src="/ministry.jpg"
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
          className="mb-16  max-w-3xl"
        >
           
          

          <h1 className="text-white text-left viga text-2xl md:text-4xl font-bold mb-4">
           His Calling & Ministry
          </h1>

          <p className="text-gray-300 text-left  max-w-3xl mx-auto text-[16px] md:text-base">
           With a heart for awakening and spiritual growth, Pastor Niyi has served across denominational platforms, raising believers who live out their faith with conviction and purpose.
          </p>
          <p className="text-gray-300 text-left max-w-3xl mx-auto text-[16px] md:text-base">
           He is the founder of Interdenominational Kingdom Outreach Mission (IKOM), through which thousands of students and young leaders have been discipled and equipped for kingdom influence.
        In 2016, he founded True Worshippers Church — a ministry committed to raising an army of believers grounded in truth and empowered by the Spirit.

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
              className= {
              
               `relative
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
                border-8
                ${service.style}
              `}
            >
              {/* Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
