import { useEffect, useState } from "react";

const useAdminFetch = <T,>(fetchFunction: () => Promise<any>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetchFunction();

      setData(res.data.data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    retry: fetchData,
  };
};

export default useAdminFetch;
