import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="w-full   lato  overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* Top Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Vision Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition duration-500"
          >
            <div className=" gap-4">
                <div className="flex items-center ">
              <div className="w-8 h-8 rounded-full px-4 mr-4 bg-violet-200 flex items-center justify-center">
                <span className="text-red-500 text-sm font-bold">◎</span>
                
              </div>
               <h3 className="md:text-2xl text-xl font-semibold viga">
                  OUR <span className="text-red-600">VISION</span>
                </h3>
                </div>

              <div>
               
                <p className="text-gray-700 mt-3 text-[16px]  leading-relaxed">
                  To raise a church passionate about soul-winning and disciple
                  her members to be true worshippers in church and salt and
                  light in the world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition duration-500"
          >
            <div className="">
              <div className="flex items-center ">
              <div className="w-8 h-8 rounded-full px-4 mr-4 bg-violet-200 flex items-center justify-center">
                <span className="text-red-500 text-sm font-bold">◎</span>
                
              </div>
               <h3 className="md:text-2xl text-xl font-semibold viga">
                  OUR <span className="text-red-600 ">MISSION</span>
                </h3>
                </div>

              <div>
               
                <p className="text-gray-700 mt-3 text-[16px] leading-relaxed">
                  We evangelize the world to receive Christ and disciple the
                  church to reflect Christ.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Cinematic Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full h-[500px]  overflow-hidden"
      >
        <motion.img
          src="/vi.jpg"   
          alt="Congregation"
          className="w-full h-full md:px-34 object-cover grayscale"
        />

        {/* Soft vignette */}
        {/* <div className="absolute inset-0   bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.6)_100%)]" /> */}
      </motion.div>
    </section>
  );
}
