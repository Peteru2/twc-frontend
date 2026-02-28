import { motion } from "framer-motion";
import { Link } from "react-router";

const Welcome = () => {
    const cards = [
  {
    id: 1,
    subtitle: "WHO WE ARE",
    title: "Our Identity",
    button: "Learn More",
    image:
      "/w1.jpg",
    link:"/about"

  },
  {
    id: 2,
    subtitle: "JOIN OUR COMMUNITY",
    title: "Connect with us",
    button: "Sign Up",
    image:
      "/w2.jpg",
    link:"/onlinecommunity"
  },
  {
    id: 3,
    subtitle: "Upcoming Event",
    title: "No Shame In Christ",
    button: "View Events",
    image:
      "/w3.jpg",
    link:"/event"

  },
];
  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    className='lato md:px-34 px-4 my-16'>
        <h4 className='bg-gray-200 w-40 text-[12px] rounded-full mb-4 text-center py-[6px]'> WELCOME TO TWC</h4>
        <h1 className='text-[#272475] viga md:text-3xl text-2xl text-bold'>TRUE WORSHIPPERS CHURCH</h1>
        <p className='text-[16px]  '>Discover truth, experience worship, and grow in a community that cares.
            <br />
            Take your next step in faith with us.
        </p>
    <section className="w-full mt-10">
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover="hover"
            className="relative group  overflow-hidden rounded-xl cursor-pointer"
          >
            {/* Background Image */}
            <motion.img
              src={card.image}
              alt={card.title}
              className="w-full h-[380px]  object-cover"
              variants={{
                hover: { scale: 1.08 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Dark Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
              variants={{
                hover: { background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent)" },
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <p className="md:text-sm text-[10px]      text-gray-300 tracking-widest uppercase">
                  {card.subtitle}
                </p>

                <motion.h2
                  className="text-white md:text-3xl text-2xl font-bold mt-2"
                  variants={{
                    hover: { y: -5 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {card.title}
                </motion.h2>
              </div>


                  <Link to={card.link}>
              <motion.button
                className="text-white text-sm flex items-center gap-2 font-medium"
                variants={{
                  hover: { x: 5 },
                }}
                transition={{ duration: 0.3 }}
              >
                {card.button}
                <span>→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  

    </motion.div>
  )
}

export default Welcome