import { Globe } from "lucide-react";
import { motion } from 'framer-motion';

const Hero = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    className="">
      <div className="relative h-[500px] md:h-screen w-full flex items-center justify-center">
        <img
          src="/aboutHero.jpg"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/10 via-black/40 to-transparent"></div>

        <div className="relative z-10 text-center">
          <div className="w-full justify-center items-center flex">
            <div className="bg-gray-50/20 flex rounded-full items-center font-bold justify-between px-6 py-[6px]">
              <Globe className="text-[#E80F1A] mr-2" />
              <h4 className="lato text-gray-100 text-[12px]"> OUR IDENTITY</h4>
            </div>
          </div>
         <motion.h1 
      className="lg:text-4xl  md:text-3xl viga md:block hidden px-2  font-bold text-white my-8"
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    >
      <p>
        Raising True Worshippers. 
        </p>
        <p className="my-4">
        Transforming an Audience
        </p>
        <p> into an Army.</p>
     </motion.h1>

<motion.h1 
variants={childVariants}
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
className="text-2xl md:hidden block viga font-bold text-white px-2  my-8">
            Raising True Worshippers. 
        Transforming an Audience
         into an Army.
          </motion.h1>


         <div className="flex flex-col items-center justify-center md:flex-row lora mt-20 gap-4">
  
  
</div>
     
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
