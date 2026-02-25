import React, { useState, useMemo } from "react"
import { motion, AnimatePresence} from "framer-motion"
import { Search, X , ChevronLeft, ChevronRight, Globe } from "lucide-react"
import { useRef } from "react"
import Hero from "../common/Hero"

type Sermon = {
  id: number
  title: string
  text: string
  category: string
  preacher: string
  date: string
  duration: string
  image: string
}

const sermonsData: Sermon[] = [
  {
    id: 1,
    title: "Sermon: No Shame in Christ ",
    text:"Phil. 1:20",
    category: "Salvation",
    preacher: "Ebenezer",
    date: "Jan 25th, 2026",
    duration: "1Hr 0Min",
    image: "/w1.jpg",
  },
  {
    id: 2,
    title: "SPECIAL MDWK IBADAN",
    text:"Phil. 1:20",
    category: "Salvation",
    preacher: "Ebenezer",
    date: "Jan 20th, 2026",
    duration: "58Mins 26Sec",
    image: "/w2.jpg",
  },
  {
    id: 3,
    title: "The Working of The Spirit",
    text:"Phil. 1:20",
    category: "Grace",
    preacher: "Living by the Spirit",
    date: "Sep 28th, 2025",
    duration: "48Mins 11Sec",
    image: "/w3.jpg",
  },
]

const categories = [
  "All",
  "Good News",
  "Salvation",
  "Jesus Love",
  "Forgiveness",
  "New Life",
  "Hope",
  "Grace",
  "The Cross",
  "Healing",
  "Faith",
  "Redemption",
  "Mercy",
  "Eternal Life",
]

const SermonsSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSermons = useMemo(() => {
    return sermonsData.filter((sermon) => {
      const matchesSearch =
        sermon.title.toLowerCase().includes(search.toLowerCase()) ||
        sermon.category.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        activeCategory === "All" || sermon.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])
  
  const scroll = (direction: "left" | "right") => {
  if (!scrollRef.current) return

  const scrollAmount = 200

  scrollRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  })
}

  return (
    <>
         <Hero img={"/sermonHeader1.png"} className="h-[0px] md:h-[290px]"/>  
        <Hero img={"/sermonHeader2.jpg"}  className="h-[290px] md:h-[0px]"/>  
    <motion.section 
     initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
    className="pt-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
       
       <div className="flex justify-center ">
       <div className="bg-red-300 flex lato  w-[100px] mb-2 rounded-full items-center font-bold justify-between px-4 py-[4px]">
              <Globe className="text-[#E80F1A] mr-2 text-[14px]" />
              <h4 className="lato text-black text-[11px]"> SERMONS</h4>
            </div>
            </div>



          <div  className="flex justify-center  mb-8 w-full">
        <div>
         <h2 className="text-xl font-bold text-center mb-4 viga tracking-wide">
        LATEST <span className="text-red-600">SERMONS</span>
      </h2>
      <div>
        <img src="/line.png" className="mt-2  w-60 md:w-80 origin-center" />
      </div>
      </div>
      </div>
      

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search sermons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-6 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {search && (
              <button
                onClick={() => setSearch("")}

                className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-500"
              >
                <X size={18} />
              </button>
            )}

            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-2">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="relative mb-8">

  {/* Left Button */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
    bg-red-600 text-white shadow-md rounded-full p-2 hover:scale-110 
    transition flex"
  >
    <ChevronLeft size={18} />
  </button>

  {/* Scroll Container */}
  <div
    ref={scrollRef}
    className="flex gap-3 overflow-x-auto px-10 no-scrollbar scroll-smooth"
  >
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition ${
          activeCategory === cat
            ? "bg-red-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Right Button */}
  <button
    onClick={() => scroll("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
    bg-red-600 shadow-md rounded-full p-2 hover:scale-110 
    transition  text-white flex"
  >
    <ChevronRight size={18} />
  </button>

</div>

        {/* Sermons Grid */}
        <motion.div
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        layout className="grid lato gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence>
            {filteredSermons.map((sermon) => (
              <motion.div
                key={sermon.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {sermon.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 w-full py-2 ">
                  <h3 className="font-semibold mb-1">
                    <p>{sermon.title}</p>
                    <p className="font-medium">{sermon.text}</p>

                  </h3>
                  <p className="text-sm text-gray-500">
                    {sermon.preacher}
                  </p>
                  <div className="flex w-full mt-2 items-center">
                  <p className="text-xs text-gray-400 ">
                    {sermon.date}
                  </p>

                  <button className="ml-auto text-[10px] bg-gray-200 hover:bg-gray-300 px-4 py-[2px] rounded-full transition">
                    DOWNLOAD
                  </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.section>
    </>
  )
}

export default SermonsSection