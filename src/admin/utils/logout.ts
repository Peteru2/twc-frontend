import { useNavigate } from "react-router-dom"; 
import apiClient from "../api/apiClients";
import { toast } from "react-toastify";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiClient.post("/admin/logout");
      toast.success("Logged out successfully!");
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Logout failed. Please try again.");
    } finally {
      navigate("/admin/login", { replace: true });
    }
  };

  return logout;
};