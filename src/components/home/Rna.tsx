import { motion } from "framer-motion";

export default function Rna() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    className="w-full bg-black lato text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <motion.img
              src="/rna.jpg"   
              alt="Lead Pastor"
              className="w-full h-[600px] object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />

        
           <div
  className="
    absolute inset-0 
    pointer-events-none
    bg-[radial-gradient(circle,transparent,rgb(0,0,0)_100%)]
  "
/>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center flex justify-center"
          >
            <div >
            {/* Logo / Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              // viewport={{ once: true }}

              className="w-full flex justify-center"
            >
               <motion.img
              src="/rnaLogo.png"   
              alt="RNA Logo"
              className="w-50"
            />
            </motion.h2>

            <p className="uppercase tracking-widest text-sm text-gray-400 mb-6">
              Our Lead Pastor
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300 leading-relaxed  max-w-md mx-auto md:mx-0 mb-8"
            >
              Reverend Niyi Adebayo is the Lead Pastor of True Worshippers
              Church, Ogbomoso. A transformational ministry committed to
              championing the Word of God and raising disciples who reflect
              Christ in character and impact.
              <br /><br />
              Through platforms such as international outreach and leadership
              development initiatives, his ministry continues to bless lives
              globally.
            </motion.p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 border cursor-pointer border-white text-white rounded-full hover:bg-white 
              hover:text-black 
              transition 
              duration-500"
            >
              Read More
            </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
