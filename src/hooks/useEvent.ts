import { useEffect, useState } from "react";
import { getEvents } from "../admin/services/others";
import type { EventItem, EventsResponse } from "../admin/types/event";

const useEvents = () => {
  const [hero, setHero] = useState<EventItem | null>(null);
  const [ongoing, setOngoing] = useState<EventItem[]>([]);
  const [upcoming, setUpcoming] = useState<EventItem[]>([]);
  const [past, setPast] = useState<EventItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await getEvents();

      const data: EventsResponse = res.data;

      setHero(data.hero);
      setOngoing(data.ongoing);
      setUpcoming(data.upcoming);
      setPast(data.past);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    hero,
    ongoing,
    upcoming,
    past,
    loading,
    error,
    refetch: fetchEvents,
  };
};

export default useEvents;