import { Globe, Mouse } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from "react-router";

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
      <motion.div 
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      className="relative  h-screen w-full flex items-center justify-center">
        <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

        <div className="absolute inset-0 bg-black/70 "></div>

        <div className="relative z-10 text-center">
          <div className="w-full justify-center items-center flex">
            <div className="bg-gray-50/20 flex rounded-full items-center font-bold justify-between px-6 py-[6px]">
              <Globe className="text-[#E80F1A] mr-2" />
              <h4 className="lato text-gray-100 text-[12px]"> OUR VISION</h4>
            </div>
          </div>
         <motion.h1 
      className="lg:text-4xl text-2xl viga md:block hidden px-2  font-bold text-white my-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.5 }} 
    >
      {"We Evangelize the World to ".split(" ").map((word, i) => (
        <motion.span key={i} variants={childVariants} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}

      <span className="text-[#E80F1A]">
        <motion.span variants={childVariants} className="inline-block mb-4">Receive</motion.span>
        <br />
        <motion.span variants={childVariants} className="inline-block md:ml-8">Christ</motion.span>
      </span>

      {"And Disciple the Church to ".split(" ").map((word, i) => (
        <motion.span key={i + 10} variants={childVariants} className="inline-block mx-2">
          {word}
        </motion.span>
      ))}

      <br />

      <span className="text-[#E80F1A] ">
        <motion.span variants={childVariants} className="inline-block mt-4">Reflect Christ.</motion.span>
      </span>
    </motion.h1>

<motion.h1 
variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.5 }} 
className="text-[28px] md:hidden block viga font-bold text-white px-4  my-8">
            We Evangelize the World to
            <b className="text-[#E80F1A]"> {" "}
              Receive  Christ
            </b> {" "}And Disciple the Church to 
            <b className="text-[#E80F1A]"> {" "}Reflect Christ.</b> 
          </motion.h1>


         <div className="flex flex-col items-center justify-center md:flex-row lora mt-20 gap-4">
  <Link to={'https://www.youtube.com/@TrueWorshippersChurch'} target="_blank">
  <h2 className="text-[14px] flex items-center justify-center hover:bg-[#E80F1A] transition-colors duration-300 cursor-pointer hover:text-white tracking-[3px] bg-white text-black font-bold rounded-full md:w-60 w-54  text-center py-4">
    WATCH A SERMON
  </h2>
  </Link>

<Link to={"/prayer"}>
  <h2 className="text-[14px] flex items-center font-bold justify-center bg-transparent tracking-[3px] hover:bg-[#E80F1A] hover:border-0 transition-colors duration-300 cursor-pointer text-white border border-white rounded-full md:w-60 w-54 py-4">
    REQUEST PRAYER
  </h2>
  </Link>
  
</div>
      <div className="flex  justify-center text-white mt-20">
        <div>
        <div className="flex justify-center mb-2">
        <Mouse className="text-white text-center text-[14px]"/>
      </div>
        <h3 className="tracking-widest text-left text-[14px]">SCROLL DOWN</h3>

        </div>
      </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
