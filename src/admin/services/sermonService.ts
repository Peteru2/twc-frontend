import apiClient from "../api/apiClients";

export const addSermon = (data: any) => {
  return apiClient.post("/admin/addsermon", data);
};