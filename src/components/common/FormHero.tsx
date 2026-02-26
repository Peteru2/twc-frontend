
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
        <div className='absolute'>
        <h2 className=' px-4 text-white  text-center md:w-2xl viga md:text-4xl text-2xl '>
          
          {text} </h2>
          <div className='flex justify-center mt-2' >
        
         <img
          src="whiteLine.png"
          alt="WhiteLine"
          className='md:w-60 w-40'
        />
        </div>
          </div>

          {/* <!DOCTYPE html>
<html>

<head>
<title>My name is peter</title>
</head>




</html> */}
        
      
      </motion.div>
    </div>
  );
};

export default FormHero;
