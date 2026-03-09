import React, { useState, useMemo, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react"

import Hero from "../common/Hero"
import "react-h5-audio-player/lib/styles.css"
import type { Sermon } from "../types"
import GlobalAudioPlayer from "../common/GlobalAudioPlayer"
import axios from "axios"
import SermonCard from "./SermonCard"

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

  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/sermons`)
        setSermons(res.data.data)
      } catch (error) {
        console.error("Error fetching sermons", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSermons()
  }, [])

  const formatDuration = (mins: number) => {
    const h = Math.floor(mins / 60 / 60)
    const m = mins % 60

    if (h === 0) return `${m} mins`
    return `${h}Hr ${m}Min`
  }

  const filteredSermons = useMemo(() => {
    return sermons.filter((sermon) => {
      const matchesSearch =
        sermon.title?.toLowerCase().includes(search.toLowerCase()) ||
        sermon.category?.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        activeCategory === "All" || sermon.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory, sermons])

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
      <Hero img={"/sermonHeader1.png"} className="h-[0px] md:h-[290px]" />
      <Hero img={"/sermonHeader2.jpg"} className="h-[290px] md:h-[0px]" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-10"
      >
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}

          <div className="flex justify-center">
            <div className="bg-red-300 flex lato w-[100px] mb-2 rounded-full items-center font-bold justify-between px-4 py-[4px]">
              <Globe className="text-[#E80F1A] mr-2 text-[14px]" />
              <h4 className="lato text-black text-[11px]">SERMONS</h4>
            </div>
          </div>

          <div className="flex justify-center mb-8 w-full">
            <div>
              <h2 className="text-xl font-bold text-center mb-4 viga tracking-wide">
                LATEST <span className="text-red-600">SERMONS</span>
              </h2>

              <div>
                <img
                  src="/line.png"
                  className="mt-2 w-60 md:w-80 origin-center"
                />
              </div>
            </div>
          </div>

          {/* Search */}

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

            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white shadow-md rounded-full p-2 hover:scale-110 transition flex"
            >
              <ChevronLeft size={18} />
            </button>

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

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 shadow-md rounded-full p-2 hover:scale-110 transition text-white flex"
            >
              <ChevronRight size={18} />
            </button>

          </div>

          {/* Sermons Grid */}

          {loading ? (
            <p className="text-center py-20">Loading sermons...</p>
          ) : filteredSermons.length === 0 ? (
            <p className="text-center py-20 text-gray-500">
              No sermons found
            </p>
          ) : (
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
              className="grid lato gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              <AnimatePresence>
                {filteredSermons.map((sermon) => (
                  <SermonCard
                    key={sermon._id}
                    sermon={sermon}
                    formatDuration={formatDuration}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </motion.section>

      <GlobalAudioPlayer />
    </>
  )
}

export default SermonsSection