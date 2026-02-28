import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const Leadership = () => {
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
    <div className="flex justify-center px-4 py-14 max-w-4xl mx-auto">
       
        <div>
                      <motion.div
      variants={ContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      className="overflow-hidden " 
    >
      <motion.h1 variants={TextVariants} className="viga md:text-4xl md:text-3xl text-2xl md:mb-2 text-center">
        Leadership & Community Impact 
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
        className="mt-4 lato text-center text-[16px] ">Beyond the pulpit, Pastor Niyi is passionate about community transformation, education, and leadership development. Through various initiatives and educational platforms, he continues to invest in the next generation of leaders. His ministry bridges spiritual depth with strategic leadership and reformational impact.
</motion.p>

</div>

    </div>
   
    
    
    </section>
  )
}

export default Leadership