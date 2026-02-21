import { motion } from "framer-motion";
import { ScrollText, Radius } from "lucide-react";

const Story = () => {
  return (
    <div className="px-4  py-14 max-w-5xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2  space-y-6 grid-cols-1 ">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="viga w-full lg:text-4xl md:text-3xl text-2xl"
        >
          <h2>
            Rooted in <span className="text-[#E80F1A]">Truth.</span>
          </h2>
          <h2 className="mt-4">
            Marked by <span className="text-[#E80F1A]">Grace.</span>
          </h2>
          <div className="md:ml-10 mt-2  w-full">
            <img
              src="/line.png"
              className="lg:w-[300px] md:w-[200px] w-[150px]"
            />
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:text-[16px] text-sm lato text-justify"
        >
          <p>
            We gladly welcome you to True Worshippers Church — a community
            committed to worshipping the Lord in Spirit and in Truth, with
            eternity in our hearts.
          </p>
          <p>
            Every service is intentionally prepared to meet you at the point of
            your need under God. Here, the Word of God is preached without
            dilution. Here, lives are transformed. Here, miracles are witnessed.
            We believe that every saint has a past and every sinner has a
            future. We believe in the integrity of God’s Word to turn a sinner
            into a saint. We believe in the power of the name of Jesus to turn
            manacles into miracles.
          </p>
        </motion.div>
      </div>

      {/* Our Story */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid md:grid-cols-2 gap-10 mt-14  "
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          className="bg-yellow-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition duration-500"
        >
          <div className="w-full viga flex justify-between items-center">
            <h1 className="text-primary md:text-3xl text-xl">Our Story</h1>
            <ScrollText className="text-primary2" />
          </div>
          <div className="lato mt-4 md:text-[16px] text-sm">
            <p>
              True Worshippers Church began through the divine inspiration given
              to Reverend Dr. Niyi Adebayo and Pastor Mrs. Grace Adebayo. The
              first service was held on May 1, 2016. On July 16, 2016, the
              church was commissioned under the leadership of Francis Wale Oke,
              alongside respected ministers across Anglican, Baptist, and
              Pentecostal streams.
              <p>From inception, the assignment was clear:</p>
              <p> Not just to inform — but to transform.</p>
              <p>Not just to gather crowds — but to raise disciples.</p>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          className="bg-yellow-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition duration-500"
        >
          <div className="w-full viga flex justify-between items-center">
            <h1 className="text-primary md:text-3xl text-xl">Why We Exist</h1>
             <Radius  className="text-primary2" />
          </div>
          <div className="lato mt-4 md:text-[16px] text-sm">
            <p>We are here for one reason:</p>
            <p>To see lives genuinely transformed by Jesus Christ.</p>
            <p>
              We are committed to raising believers who worship God sincerely in
              church and represent Him faithfully in the world — as salt in a
              corrupt generation and light in dark places.
            </p>
            Our heartbeat is evangelism.Our passion is discipleship.
            <p>Our goal is maturity.</p>
            <p>Our outcome is impact.</p>
            <p>
              We do not measure success by attendance alone, but by
              transformation, growth, and kingdom influence.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Story;
