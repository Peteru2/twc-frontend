import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

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
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 text-sm font-bold">◎</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  OUR <span className="text-red-600">VISION</span>
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
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
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 text-sm font-bold">◎</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  OUR <span className="text-red-600">MISSION</span>
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
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
        {/* <div className="absolute inset-0  bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.6)_100%)]" /> */}
      </motion.div>
    </section>
  );
}
