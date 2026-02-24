import { motion } from "framer-motion";
    
const NewLetterGive = () => {
  return (
    <div className='w-full lato '>
<motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex justify-center px-4 py-22 w-full'>

    <div className='w-full lato flex flex-col items-center'> 
        <h1 className='viga md:text-3xl text-2xl text-center'>GET INSPIRATIONAL CONTENT AND UPDATES</h1>
        
        <div className="w-full flex justify-center">
            <input 
                type="email"
                placeholder='user@example.com'
                className='w-90 rounded-full py-2 my-[12px] border border-gray-300 px-4 transition duration-500 focus:outline-none focus:ring-2 focus:ring-[#E80F1A]'
            />
        </div>

        <button className='bg-[#E80F1A] hover:bg-white text-white hover:text-black hover:border hover:border-[#E80F1A] cursor-pointer md:w-70  px-2 w-54 rounded-full py-2 transition duration-500'>
            Subscribe to our Newsletter
        </button>
    </div>
</motion.div>


{/* Give */}

<div className="bg-[#E80F1A] overflow-hidden relative lg:py-36 py-16">
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        className="lg:w-[800px] lg:pl-[300px] px-[40px] text-white">

            <h1 className="md:text-4xl text-2xl viga ">
                Partner in the Vision
            </h1>

            <div className="py-4">
                Every gift helps us evangelize, disciple, and serve with excellence.Together, we are raising true worshippers and transforming lives.
            </div>

            <div>
            <button className="rounded-full px-4  hover:bg-white transition hover:text-[#E80F1A] cursor-pointer duration-400 py-2 border border-white">
                GIVE NOW
            </button>
            </div>
        </motion.div>
        
        <div
               
        >
        <img 
        src="/hand.png"
        alt="hand"
        className="absolute md:bottom-0 bottom-[-2px] lg:w-[800px] w-[300px] right-[-4px]"
                />
                </div>
</div>
    </div>
  )
}

export default NewLetterGive