import apiClient from "../api/apiClients";

// ============ EXISTING ENDPOINTS ============

export const getFirstTimers = () => {
  return apiClient.get("/admin/first-timers");
};

export const getCelebrations = () => {
  return apiClient.get("/admin/celebrations");
};

export const getCommunity = () => {
  return apiClient.get("/admin/community");
};

export const getPrayer = () => {
  return apiClient.get("/admin/prayer");
};

export const getMembers = () => {
  return apiClient.get("/admin/members");
};

export const getNewsLetter = () => {
  return apiClient.get("/admin/newsletter");
};

// ============ EVENT ENDPOINTS ============

export const createEvent = (data: any) => {
  return apiClient.post("/admin/event", data);
};

export const getEvents = () => {
  return apiClient.get("/events");
};

export const getSingleEvent = (id: string) => {
  return apiClient.get(`/events/${id}`);
};


export const updateEvent = (id: string, data: any) => {
  return apiClient.put(`/admin/event/${id}`, data);
};


export const deleteEvent = (id: string) => {
  return apiClient.delete(`/admin/event/${id}`);
};


export const getEventStatus = (event: any): "upcoming" | "ongoing" | "past" => {
  const now = new Date();
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);

  if (now < startDate) return "upcoming";
  if (now >= startDate && now <= endDate) return "ongoing";
  return "past";
};


export const formatEventDate = (event: any): string => {
  return event.dateDisplay;
};