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

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  };
  return (
    <div className="">
      <div className="relative h-screen w-full flex items-center justify-center">
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
      className="lg:text-6xl md:text-5xl text-3xl viga md:block hidden px-2  font-bold text-white my-8"
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    >
        Raising True Worshippers. 
        <br />Transforming an Audience
        <br /> into an Army.
     </motion.h1>

<motion.h1 
variants={childVariants}
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
className="text-4xl md:hidden block viga font-bold text-white px-2  my-8">
            Raising True Worshippers. 
        Transforming an Audience
         into an Army.
          </motion.h1>


         <div className="flex flex-col items-center justify-center md:flex-row lora mt-20 gap-4">
  
  
</div>
     
        </div>
      </div>
    </div>
  );
};

export default Hero;
