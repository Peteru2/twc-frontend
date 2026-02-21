import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const Journey = () => {
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
  return (
    <section>
    <div className="flex justify-center px-4 pb-14 max-w-5xl mx-auto">
       
        <div>
                      <motion.div
      variants={ContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      className="overflow-hidden " 
    >
      <motion.h1 variants={TextVariants} className="viga md:text-4xl md:text-3xl text-2xl md:mb-2 text-center">
        The Journey to <span className="text-primary">Amazing Grace Garden</span>
      </motion.h1>
      
      <div className="flex justify-center w-full">
        <motion.img 
          variants={LineVariants}
          src="/line.png" 
          className="mt-2  w-60 md:w-80 origin-center" 
        />
      </div>
    </motion.div>
        
        <motion.p 
        initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        className="mt-4 lato text-center text-[16px] ">In 2019, as part of a divine mandate to relocate after three years, a team of elders began searching for land to establish a permanent worship center. Without lobbying or requesting assistance from anyone, the church committed the process to prayer. During this period, God independently spoke to His Excellency, Otunba Christopher Alao-Akala, who reached out to donate land to the ministry. What began as a two-plot donation became something greater — a larger parcel of land that is now home to our current worship site, Amazing Grace Garden.
On the day the documents were handed over in December 2019, he remarked that “Amazing Grace” should be added because he saw something extraordinary ahead for the commission.
To God be the glory.
</motion.p>

</div>

    </div>
    <div className="px-4 md:px-0 w-full justify-center flex max-w-5xl w-full mx-auto">
        <img 
         src = "/churchGif.gif" className="w-[700px]"/>
    </div>
    
    
    </section>
  )
}

export default Journey