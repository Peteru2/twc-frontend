import apiClient from "../api/apiClients";

export const getFirstTimers = () => {
  return apiClient.get("/admin/first-timers");
};

export const getCelebrations = () => {
  return apiClient.get("/admin/celebrations");
};