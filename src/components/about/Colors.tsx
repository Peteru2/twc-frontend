import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const ContainerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.2,
    },
  },
};
    const LineVariants:Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.8, ease: "circOut" },
  },
};
const TextVariants:Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.5, 
      duration: 1,
    },
  },
};

const Colors = () => {
    const cards = [
  {
    id: 1,
    color: "Power (Red)",
    meaning: "We are Spirit-empowered, charismatic, and dynamic. We believe in the present-day operation of the Holy Spirit.",
    bg: "bg-red-500",
    textColor:"white"
  },
   {
    id: 2   ,
    color: "Love (Blue)",
    meaning: "Church is not a place you attend; it is a family you belong to. We correct in love and build in grace.",
    bg: "bg-violet-500",
    textColor:"white"
  },
  
  {
    id: 3,
    color: "Gold (Dignity)",
    meaning: "We carry ourselves as kings and priests — operating with excellence, skill, and honor in everything we do.",
    bg: "bg-yellow-700",
    textColor:"white",

  },
  {
    id: 4,
    color: "Purity (White)",
    meaning: "We are committed to holiness and sanctity. We believe those who serve God must reflect His nature in conduct and character.",
    bg: "",
    textColor:"black"


  },

];
  return (
    <div>
<div className="flex justify-center md:px-0 px-4 pb-14 max-w-5xl mx-auto">
       
        <div>
                      <motion.div
      variants={ContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      className="overflow-hidden " 
    >
      <motion.h1 variants={TextVariants} className="viga md:text-5xl text-4xl text-center">
        What Defines Us
      </motion.h1>
      
      <div className="flex justify-center w-full">
        <motion.img 
          variants={LineVariants}
          src="/line.png" 
          className="mt-2 origin-center" 
        />
      </div>
    </motion.div>

<div className="grid md:gap-6  md:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover="hover"
            className=" overflow-hidden  cursor-pointer"
          >
            <div className={`${card.bg} h-46 rounded-xl mt-4  text-${card.textColor} p-4 `}>
                <h2 className="viga text-3xl mb-2">{card.color}</h2>
                <p className="lato text-[15px]">{card.meaning}</p>
            </div>

          </motion.div>
        ))}
          </div>



    </div>
    </div>
    </div>
  )
}

export default Colors