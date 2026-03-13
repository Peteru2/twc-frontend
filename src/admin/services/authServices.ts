  import apiClient from "../api/apiClients";

export const loginAdmin = (data: any) => {
  return apiClient.post("/admin/login", data);
};

export const registerAdmin = (data: any) => {
  return apiClient.post("/admin/register", data);
};