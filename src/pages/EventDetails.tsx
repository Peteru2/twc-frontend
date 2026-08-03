import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { getEvents, getSingleEvent } from "../admin/services/others";


interface Event {
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
  hero: Event | null;
  upcoming: Event[];
  ongoing: Event[];
  past: Event[];
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EventDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [event, setEvent] = useState<Event | null>(null);

  const [events, setEvents] = useState<Event[]>([]);

  const [imageIndex, setImageIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);

      const [single, all] = await Promise.all([
        getSingleEvent(id!),
        getEvents(),
      ]);

      setEvent(single.data.data);

      const response: EventsResponse = all.data;

      setEvents([...response.ongoing, ...response.upcoming, ...response.past]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!event) return;

    const interval = setInterval(() => {
      const diff = new Date(event.startDate).getTime() - Date.now();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  const related = useMemo(() => {
    return events.filter((x) => x._id !== id).slice(0, 3);
  }, [events]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-24 px-6 animate-pulse">
        <div className="h-[550px] bg-gray-200 rounded-3xl" />

        <div className="space-y-4 mt-8">
          <div className="h-10 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
    );
  }

  if (!event) return null;

  const isUpcoming = new Date() < new Date(event.startDate);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-red-600"
        >
          <ChevronLeft size={18} />
          Back
        </button>

        <img
          src={event.flier[imageIndex]}
          className="rounded-3xl w-full h-[650px] object-cover"
        />

        {event.flier.length > 1 && (
          <div className="flex gap-4 mt-5">
            {event.flier.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => setImageIndex(index)}
                className={`h-24 w-24 rounded-xl cursor-pointer object-cover border-4 ${
                  imageIndex === index ? "border-red-600" : "border-transparent"
                }`}
              />
            ))}
          </div>
        )}

        <h1 className="text-5xl font-bold mt-10">{event.title}</h1>

        <div className="flex flex-wrap gap-8 mt-8 text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={18} />

            {event.dateDisplay}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />

            {event.location}
          </div>
        </div>

        <p className="mt-10 leading-9 text-gray-700">{event.description}</p>

        {isUpcoming && (
          <div className="grid grid-cols-4 gap-5 mt-12">
            {Object.entries(timeLeft).map(([k, v]) => (
              <div
                key={k}
                className="bg-red-600 text-white rounded-2xl py-8 text-center"
              >
                <h2 className="text-4xl font-bold">
                  {String(v).padStart(2, "0")}
                </h2>

                <p className="uppercase mt-2">{k}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-10">Related Events</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link
                key={item._id}
                to={`/events/${item._id}`}
                className="rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={item.flier[0]} className="h-72 w-full object-cover" />

                <div className="p-6">
                  <h3 className="font-bold text-xl">{item.title}</h3>

                  <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-5 flex justify-between items-center">
                    <span className="text-red-600">View Event</span>

                    <ChevronRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventDetails;
