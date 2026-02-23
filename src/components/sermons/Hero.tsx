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
      className="relative  h-[400px] md:h-screen w-full flex items-center justify-center">
        <img
          src="/homeHero.jpg"
          alt="Hero Background"
          className="absolute inset-0  h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 text-center">
          <div className="w-full justify-center items-center flex">
            <div className="bg-gray-50/20 flex rounded-full items-center font-bold justify-between px-6 py-[6px]">
              <Globe className="text-[#E80F1A] mr-2" />
              <h4 className="lato text-gray-100 text-[12px]"> Sermons</h4>
            </div>
          </div>
         

<motion.h1 
variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.5 }} 
className="text-[28px]  block viga font-bold text-white px-4  my-8">
                Sermons
          </motion.h1>


         <div className="flex flex-col items-center justify-center md:flex-row lora mt-20 gap-4">z
  
  
  
</div>
      
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
