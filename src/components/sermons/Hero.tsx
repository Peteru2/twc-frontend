import { Globe } from "lucide-react";
import { motion } from 'framer-motion';

const Hero = () => {

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5 } 
//     },
//   };
  return (
    <div className="">
      <motion.div 
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      className="relative  h-[250px] md:h-[400px] w-full flex items-center justify-center">
        <img
          src="/header.jpg"
          alt="Hero Background"
          className="absolute inset-0  h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      </motion.div>
      aksdn;asd
    </div>
  );
};

export default Hero;
