import { motion } from "framer-motion";

const Experience = () => {
     const services = [
  {
    title: "Spirit-Led Worship",
    desc1: "Passionate praise. Reverent worship.  A genuine encounter with God.",
    desc2: "",
    image:
      "/ex1.jpg",
  },
  {
    title: "BIBLICAL TEACHING",
    desc1: " Clear, practical, transformational teaching rooted in Scripture.",
    desc2: "",
    image:
      "/ex2.jpg",
  },
  {
    title: "GENUINE COMMUNITY",
   desc1: "We are a family — not just a congregation.",
    image:
      "/ex3.jpg",
  },
  {
    title: "A CHURCH ON MISSION",
    desc1: "We are passionate about evangelism, discipleship, and raising believers who reflect Christ in everyday life.",
    desc2:"",
    image:
      "/ex4.jpg",
  },
];
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    className="py-16 lato w-full px-4">
        <div className="text-center mb-6">
            <h1 className="text-5xl text-[#272475] viga text-center mb-2 font-bold">THE TWC EXPERIENCE</h1>
            <h5 className="text-[14px]">
                Where worship is heartfelt, teaching is sound, and lives are transformed.
            </h5>
        </div>


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
    pb-6
    px-4
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
                w-[240px]          
                h-[320px]
                flex-shrink-0       
                snap-start
                rounded-xl
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black-600 to-transparent opacity-100 group-hover:opacity-90 transition duration-500" />

              {/* Text */}
              <div className="absolute top-58  left-4 text-white">
                <h3 className="font-semibold text-left text-lg mb-[2px]">
                  {service.title}
                </h3>

                <div className="text-left">
                <p className="text-xs  opacity-80">{service.desc1}</p>
                <p className="text-xs opacity-80">{service.desc2}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


    </motion.div>
  )
}

export default Experience