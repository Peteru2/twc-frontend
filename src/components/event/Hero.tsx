"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import type { TimeLeft } from "../../data/upcomingEvent"
import { events } from "../../data/upcomingEvent"

export default function EventCarousel() {
  const [[index, direction], setIndex] =
    useState<[number, number]>([0, 0])

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const autoRef = useRef<number | null>(null)
  const event = events[index]
  const hasCountdown = Boolean(event.dateISO)
 
  useEffect(() => {
    if (event.dateISO ==="") return
    console.log(event.dateISO)
    const interval = setInterval(() => {
      const diff =
        new Date(event.dateISO).getTime() - Date.now()

      if (diff <= 0) return

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (diff / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (diff / 1000 / 60) % 60
        ),
        seconds: Math.floor(
          (diff / 1000) % 60
        ),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [event])

 
  useEffect(() => {
    autoRef.current = setTimeout(() => {
      paginate(1)
    }, 7000)

    return () => {
      if (autoRef.current)
        clearTimeout(autoRef.current)
    }
  }, [index])

  const paginate = (dir: number) => {
    setIndex(([prev]) => [
      (prev + dir + events.length) %
        events.length,
      dir,
    ])
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="relative   w-full md:min-h-[650px] min-h-[620px] overflow-hidden flex items-center justify-center">

   
      <img
        src="./eventHero.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
      />

     
      <div className="absolute inset-0 bg-red-800/80" />

      
      <div className="relative z-10 w-full max-w-6xl px-6">

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={event.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 120, damping: 20 },
              opacity: { duration: 0.3 },
            }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/70"
          >

          
            <img
              src={event.flier[0]}
              className="w-full h-[500px] md:h-[550px] object-cover"
            />

            {/* Overlay on flier */}
            <div className="absolute inset-0 bg-black/60" />

            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">

              <span className="bg-red-600 px-4 lato py-1 rounded-full text-sm mb-4">
                Upcoming Event
              </span>

              <h2 className="md:text-3xl text-2xl viga md:text-5xl font-bold">
                {event.title}
              </h2>

              <p className="mt-4 text-[15px] lato md:text-base text-white/80">
                {event.dateDisplay}
              </p>

              <p className="text-[16px] flex  lato md:text-base text-white/80">
                <MapPin /> {event.location}
              </p>

{hasCountdown && (
    <>
              <p className="mt-6 lato text-white/70 text-sm">
                Event starts in:
              </p>

           
              <div className="mt-4 flex lato flex-wrap justify-center gap-4">
                {Object.entries(timeLeft).map(
                  ([unit, value]) => (
                    <TimerBox
                      key={unit}
                      value={value}
                      label={unit}
                    />
                  )
                )}
                
              </div>
              </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

     
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
      >
        <ChevronRight />
      </button>
    </section>
  )
}

function TimerBox({
  value,
  label,
}: {
  value: number
  label: string
}) {
  return (
    <motion.div
      key={value}
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-red-600/10 backdrop-blur-md border border-red-600 px-5 py-4 rounded-lg text-center min-w-[85px]">
      <div className="text-xl lato md:text-2xl font-bold">
        {String(value).padStart(2, "0")}
        
      </div>
      <div className="text-xs text-white/70 capitalize">
        {label}
      </div>
    </motion.div>
  )
}