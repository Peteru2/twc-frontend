import { motion } from "framer-motion";
import { Globe, Anchor, Rocket } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Our Mandate",
    content: (
      <>
        <p className="mb-3">
          We carry a reformational and transformational message to the world,
          beginning from Nigeria and extending wherever God sends us.
        </p>
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>Know Christ deeply</li>
          <li>Live holy lives boldly</li>
          <li>Serve God faithfully</li>
          <li>Influence society intentionally</li>
        </ul>
      </>
    ),
  },
  {
    icon: Anchor,
    title: "Our Covenant Anchor",
    content: (
      <>
        <p className="mb-3">
          Our confidence is rooted in God’s covenant promise in Jeremiah 30:19–22.
        </p>
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>Walk in thanksgiving</li>
          <li>Grow in strength</li>
          <li>Raise godly children</li>
          <li>Lead from within</li>
        </ul>
      </>
    ),
  },
  {
    icon: Rocket,
    title: "The Future",
    content: (
      <>
        <p>
          We believe the best is ahead. We are not just building a church —
          we are raising a generation.
        </p>
      </>
    ),
  },
];

export default function Mandate() {
  return (
    <section className="w-full   py-14 overflow-hidden relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl -top-40 -left-40"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 }
            }
          }}
          className="grid md:grid-cols-3 md:gap-10 gap-5"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                className="
                  relative
                  p-6 
                  rounded-2xl
                  border
                  border-red-500
                  bg-white/80
                  backdrop-blur-lg
                  shadow-lg
                  group
                  overflow-hidden
                "
              >
               
                <motion.div
                  className="absolute inset-0 border-2 border-red-500 rounded-2xl opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6"
                >
                  <Icon className="text-red-600" size={20} />
                </motion.div>

               
                <h3 className="text-2xl viga mb-4">
                  {card.title}
                </h3>

               
                <div className=" md:text-[16px] text-gray-800 text-[14px] lato leading-relaxed">
                  {card.content}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}