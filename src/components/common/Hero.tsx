
import { motion } from 'framer-motion';
type HeroProps = {
  img: string
  className:string
}
const Hero = ({img, className} :HeroProps) => {



  return (
    <div className="">
      <motion.div 
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
     className={`${className} relative   w-full flex items-center justify-center`}>
        <img
          src={img}
          alt="Hero Background"
          className={`${className} absolute inset-0  h-full w-full object-cover"`}
        />

      

      </motion.div>
    </div>
  );
};

export default Hero;
