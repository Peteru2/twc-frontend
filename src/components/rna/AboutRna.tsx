import { motion } from "framer-motion";

const AboutRna = () => {
  return (
    <section className=" py-20 px-6 flex justify-center">
      <div className="relative max-w-4xl w-full h-[420px]">
        
        {/* Image (background style on left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-0 top-0 h-full w-full overflow-hidden"
        >
          <img
            src="/aboutRna.jpeg" // replace with your image
            alt="Reverend Dr. Miyi Adebayo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* White Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            absolute
            md:right-10
            top-1/2
            -translate-y-1/2
            md:w-[45%]
            md:bg-white bg-transparent
            p-10
            shadow-2xl
            md:text-black
            text-white
          "
        >
          <h2 className="text-xl font-semibold md:text-gray-900 text-gray-400  mb-4">
            Reverend Dr. Niyi Adebayo
          </h2>

          <p className="md:text-gray-600 text-white leading-relaxed text-sm">
            is the Lead Pastor of True Worshippers Church,
            Ogbomoso, a reformational ministry committed to
            evangelizing the world to receive Christ and discipling
            the Church to reflect Christ. For over three decades,
            he has faithfully proclaimed the gospel across
            denominations, campuses, communities, and nations,
            with a deep passion for revival, discipleship,
            and transformational leadership.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRna;