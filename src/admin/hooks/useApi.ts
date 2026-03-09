import { useState } from "react";
import { toast } from "react-toastify";

const useApi = () => {
  const [loading, setLoading] = useState(false);

  const request = async (apiCall: () => Promise<any>, successMessage?: string) => {
    try {
      setLoading(true);
      const res = await apiCall();

      if (successMessage) {
        toast.success(successMessage);
      }
    

      return res.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading };
};

export default useApi;