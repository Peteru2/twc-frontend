import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const pastors = [
  {
    title: "Rev. Dr.",
    name: "Niyi Adebayo",
    role: "Lead Pastor",
    image: "/pastoralTeam/21.png"
  },
  {
    title: "Pastor Mrs",
    name: " Grace Adebayo",
    role: "Administrator",
    image: "/pastoralTeam/14.jpg",
  },
   {
    title: "Pastor Engr.",
    name: "Stephen Akinpelu",
    role: "Resident Pastor",
    image: "/pastoralTeam/20.png"
  },
  {
    title: "Pastor Dr.",
    name: "Seyi Adebayo",
    role: "Youth Pastor",
    image: "/pastoralTeam/7.jpg"
  },
  {
    title: "Pastor Dr.",
    name: "Abiodun Oni",
    role: "Chaplain",
    image: "/pastoralTeam/17.jpg"
  },
  {
    title: "Rev.",
    name: "Jide Adeleke",
    role: "",
    image: "/pastoralTeam/4.jpg"
  },
   {
    title: "Pastor",
    name: "Olatunde Idowu",
    role: "",
    image: "/pastoralTeam/15.jpg"
  },
   {
    title: "Rev. Dr.",
    name: "David-Mobalaji Ishola",
    role: "",
    image: "/pastoralTeam/3.jpg"
  },
  {
    title: "Rev. Dr.",
    name: "Temilola-Mobalaji Ishola",
    role: "",
    image: "/pastoralTeam/2.jpg"
  },
  {
    title: "Pastor",
    name: "Toye Olamoyegun",
    role: "",
    image: "/pastoralTeam/6.jpg"
  },
{
    title: "Pastor",
    name: "Rinde Olagoke",
    role: "",
    image: "/pastoralTeam/5.jpg"
  },
  {
    title: "Pastor",
    name: "Sam Jesutobi",
    role: "",
    image: "/pastoralTeam/1.jpg"
  },
  {
    title: "Deaconess",
    name: "C.M. Adebayo",
    role: "",
    image: "/pastoralTeam/18.jpg"
  },
  {
    title: "Deaconess",
    name: "T.B. Akinpelu",
    role: "",
    image: "/pastoralTeam/12.jpg"
  },
  {
    title: "Pastor Mrs",
    name: "Agatha Jesutobi",
    role: "",
    image: "/pastoralTeam/19.jpg"
  },
  {
    title: "Deaconess ",
    name: "Victoria Idowu",
    role: "",
    image: "/pastoralTeam/10.jpg"
  },
  {
    title: "Mrs",
    name: "Feranmi Adebayo",
    role: "",
    image: "/pastoralTeam/13.jpg"
  },
   {
    title: "Mrs",
    name: "Kehinde Adeleke",
    role: "",
    image: "/pastoralTeam/11.jpg"
  },
  {
    title: "Mrs",
    name: "Tomisin Olagoke",
    role: "",
    image: "/pastoralTeam/9.jpg"
  },
   {
    title: "Minister",
    name: "Muyiwa Nafiu",
    role: "",
    image: "/pastoralTeam/16.jpg"
  },
  {
    title: "Minister",
    name: "Funso Ajibade",
    role: "",
    image: "/pastoralTeam/8.jpg"
  },

];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item:Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .2 }}
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
        gap-4
      "
      >
        {pastors.map((pastor) => (
          <motion.div
            key={pastor.name}
            variants={item}
            whileHover={{
              y: -12,
              transition: { duration: .25 },
            }}
            className="
            group
            rounded-[10px]
            overflow-hidden
            cursor-pointer
            bg-white
            shadow-lg
          "
          >
            <div className="relative h-[340px] overflow-hidden ">

  {/* Image */}
  <motion.img
    src={pastor.image}
    alt={pastor.name}
    className="w-full h-full object-cover"
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.6 }}
  />

  {/* Gradient Overlay */}
  <motion.div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black
      via-black/55
      via-35%
      to-transparent
    "
    whileHover={{
      background:
        "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.65) 25%, rgba(0,0,0,0) 100%)",
    }}
    transition={{ duration: 0.35 }}
  />

  {/* Text */}
  <motion.div
    className="
      absolute
      bottom-5
      left-0
      right-0
      z-10
      px-4
      text-center
    "
    whileHover={{ y: -5 }}
    transition={{ duration: .3 }}
  >
    <p className="text-white island-moments-regular text-xl leading-none">
      {pastor.title}
    </p>

    <h3 className="text-white font-semibold text-sm -mt-1">
      {pastor.name}
    </h3>

    <p className="text-gray-200 text-[11px] mt-1">
      {pastor.role}
    </p>

    <motion.div
      initial={{ width: 0 }}
      whileHover={{ width: 55 }}
      transition={{ duration: .3 }}
      className="h-[2px] bg-red-600 rounded-full mx-auto mt-2"
    />
  </motion.div>

</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}