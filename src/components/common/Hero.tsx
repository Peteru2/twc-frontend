
import { motion } from 'framer-motion';
type HeroProps = {
  img: string
}
const Hero = ({img} :HeroProps) => {



  return (
    <div className="">
      <motion.div 
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      className="relative  h-[250px] md:h-[300px] w-full flex items-center justify-center">
        <img
          src={img}
          alt="Hero Background"
          className="absolute inset-0  h-full w-full "
        />

      

      </motion.div>
    </div>
  );
};

export default Hero;
