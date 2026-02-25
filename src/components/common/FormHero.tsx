
import { motion } from 'framer-motion';
type HeroProps = {
  img: string
  className:string
  text:string
}
const FormHero = ({img, className, text} :HeroProps) => {
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
          className={` absolute inset-0  h-full w-full object-cover"`}
        />
        <h2 className='absolute px-4 text-white  text-center md:w-2xl viga md:text-4xl text-2xl '>{text} </h2>
      </motion.div>
    </div>
  );
};

export default FormHero;
