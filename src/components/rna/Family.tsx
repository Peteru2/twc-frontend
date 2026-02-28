import { motion } from "framer-motion"
   type Props = {
    reverse?: boolean
    }
const Family = ({reverse}:Props) => {
 
  return (
    <div>


<div className="grid md:grid-cols-2 overflow-x-hidden  pb-8 max-w-4xl mx-auto items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`py-6 px-6 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          
          <div className="mb-10">

          <h2 className="text-xl md:text-2xl  viga font-bold mb-4">
            Family
          </h2>
           <p className="text-gray-600  leading-relaxed lato max-w-md mx-auto">
            He is married to Grace Adebayo, and they are blessed with biological, spiritual, and foster children.
          </p>
          </div>
          
          <div>

          <h2 className="text-xl md:text-2xl  text-red-600 viga font-bold mb-4">
            Mandate
          </h2>

          <p className="text-gray-600 leading-relaxed lato max-w-md mx-auto">
            His life and ministry are driven by one divine assignment:
            “To evangelize the world to receive Christ and disciple the Church to reflect Christ.”
          </p>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${reverse ? "md:order-1" : "md:order-2"}`}
        >
          <img
            src="/dadAndMum.jpg"
            alt="Dad and mum"
            className="w-full h-[420px] md:h-[450px] px-4 object-cover md:rounded-4xl rl"
          />
        </motion.div>
      </div>
    </div>

    
  )
}

export default Family