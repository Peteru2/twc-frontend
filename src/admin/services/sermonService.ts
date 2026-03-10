import apiClient from "../api/apiClients";

export const addSermon = (data: any) => {
  return apiClient.post("/admin/addsermon", data);
};

export const getSermons = () => {
  return apiClient.get("/admin/sermons");
};

export const deleteSermon = (id: string) => {
  return apiClient.delete(`/admin/sermon/${id}`);
};

export const updateSermon = (id: string, data: any) => {
  return apiClient.put(`/admin/sermon/${id}`, data);
}