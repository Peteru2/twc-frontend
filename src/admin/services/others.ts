import apiClient from "../api/apiClients";

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