import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getEvents } from "../../admin/services/others";

interface EventItem {
  _id: string;
  title: string;
  description: string;
  flier: string[];
  startDate: string;
  endDate: string;
  dateDisplay: string;
  location: string;
}

interface EventsResponse {
  hero: EventItem | null;
  upcoming: EventItem[];
  ongoing: EventItem[];
  past: EventItem[];
}

type Tab = "upcoming" | "ongoing" | "past";

const UpcomingEvents = () => {
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState<EventsResponse>({
    hero: null,
    upcoming: [],
    ongoing: [],
    past: [],
  });

  const [activeTab, setActiveTab] = useState<Tab>("upcoming");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await getEvents();
        setEvents(res.data);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const currentEvents = useMemo(() => {
    switch (activeTab) {
      case "ongoing":
        return events.ongoing;

      case "past":
        return events.past;

      default:
        return events.upcoming;
    }
  }, [activeTab, events]);

  if (loading) {
    return (
      <section className="py-24 px-6 lg:px-24">
        <div className="animate-pulse grid md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="rounded-3xl overflow-hidden border border-gray-200"
            >
              <div className="h-80 bg-gray-200" />

              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-red-600 font-semibold">
            Church Events
          </p>

          <h2 className="text-4xl font-bold mt-3">Explore Our Events</h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            Stay informed about upcoming programs, follow ongoing meetings, and
            revisit memorable moments from previous events.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-gray-100 rounded-full p-2 flex gap-2">
            {[
              {
                label: "Upcoming",
                value: "upcoming",
              },
              {
                label: "Ongoing",
                value: "ongoing",
              },
              {
                label: "Past",
                value: "past",
              },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value as Tab)}
                className={`px-6 py-3 rounded-full transition font-medium ${
                  activeTab === tab.value
                    ? "bg-red-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="grid lg:grid-cols-2 gap-10 mt-16"
          >
            {currentEvents.length === 0 && (
              <div className="col-span-full text-center py-24">
                <h3 className="text-2xl font-semibold">
                  No {activeTab} events
                </h3>

                <p className="text-gray-500 mt-3">Check back later.</p>
              </div>
            )}

            {currentEvents.map((event) => (
              <motion.div
                key={event._id}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="overflow-hidden">
                  <img
                    src={event.flier[0]}
                    alt={event.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold">{event.title}</h3>

                  <p className="mt-5 text-gray-600 leading-8 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3 text-gray-500">
                      <CalendarDays size={18} />

                      {event.dateDisplay}
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                      <MapPin size={18} />

                      {event.location}
                    </div>
                  </div>

                  <Link
                    to={`/events/${event._id}`}
                    className="inline-flex items-center gap-3 mt-8 font-semibold text-red-600 hover:gap-5 transition-all"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UpcomingEvents;
