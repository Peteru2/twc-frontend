import { useEffect, useState } from "react";
import type { DashboardResponse } from "../types/dashboard";
import { useNavigate } from "react-router-dom";


const useDashboard = () => {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboard = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/admin/dashboard`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include", 
        }
      );

      const result = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          navigate("/admin/login");
        }
        throw new Error(result.message || "Failed to fetch dashboard");
      }

      setData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return { data, loading };
};

export default useDashboard;