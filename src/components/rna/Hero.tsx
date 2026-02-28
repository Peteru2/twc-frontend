import { motion } from 'framer-motion';


const Hero = () => {

  return (
    <div className="">
      <motion.div 
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      className="relative  md:h-[640px]  h-[400px] w-full flex items-center justify-center">
        <img
          src="/rnaHero.jpeg"
          alt="Hero Background"
          className="absolute inset-0  h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 text-center">
          <div className="w-full justify-center items-center flex">
             <img
          src="/rnaLogo.png"
          alt="Hero Background"
          className="lg:w-[800px] md:w-[400px] w-[300px]"
        />
            
          
</div>
    </div>
      </motion.div>
    </div>
  );
};

export default Hero;
