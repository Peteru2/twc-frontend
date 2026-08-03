"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import useEvents from "../../hooks/useEvent";

// import type { EventItem } from "../types";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventCarousel() {
  const { hero, ongoing, upcoming, loading } = useEvents();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!hero) return;

    if (ongoing.length > 0) return;

    if (!hero.startDate) return;

    const interval = setInterval(() => {
      const difference = new Date(hero.startDate).getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hero, ongoing]);

  if (loading) {
    return <section className="relative h-[650px] bg-gray-200 animate-pulse" />;
  }

  if (!hero) return null;

  const badge =
    ongoing.length > 0
      ? {
          text: "LIVE NOW",
          color: "bg-green-600",
        }
      : upcoming.length > 0
        ? {
            text: "UPCOMING EVENT",
            color: "bg-red-600",
          }
        : {
            text: "RECENT EVENT",
            color: "bg-gray-700",
          };

  return (
    <section className="relative w-full min-h-[650px] overflow-hidden flex items-center justify-center">
      <img
        src="/eventHero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
      />

      <div className="absolute inset-0 bg-red-900/80" />

      <div className="relative z-20 w-full max-w-7xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={hero._id}
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={hero.flier[0]}
              alt={hero.title}
              className="h-[550px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 text-white">
              <span
                className={`${badge.color} px-5 py-2 rounded-full text-sm font-semibold tracking-wide`}
              >
                {badge.text}
              </span>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mt-6 text-3xl md:text-6xl font-bold viga"
              >
                {hero.title}
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="max-w-3xl mt-6 text-lg text-white/85 lato"
              >
                {hero.description}
              </motion.p>

              <div className="mt-8 space-y-2">
                <p className="text-white/80 lato">{hero.dateDisplay}</p>

                <p className="flex items-center justify-center gap-2 text-white/80 lato">
                  <MapPin size={18} />
                  {hero.location}
                </p>
              </div>

              {ongoing.length === 0 && upcoming.length > 0 && (
                <>
                  <p className="mt-10 text-white/80 lato">Event starts in</p>

                  <div className="mt-5 flex flex-wrap justify-center gap-5">
                    <TimerBox value={timeLeft.days} label="Days" />

                    <TimerBox value={timeLeft.hours} label="Hours" />

                    <TimerBox value={timeLeft.minutes} label="Minutes" />

                    <TimerBox value={timeLeft.seconds} label="Seconds" />
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TimerBox({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      key={value}
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="min-w-[90px] rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 p-5"
    >
      <h2 className="text-3xl font-bold">{String(value).padStart(2, "0")}</h2>

      <p className="mt-1 text-sm text-white/70 uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}
