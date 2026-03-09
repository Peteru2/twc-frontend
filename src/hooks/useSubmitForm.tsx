import { useState } from "react";
import type { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";

interface SubmitOptions {
  endpoint: string;
  successMessage?: string;
}


const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (
    data: any,
    reset: UseFormReset<any>,
    options: SubmitOptions
  ) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${options.endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
        
      );
      

      const result = await response.json();

      if (response.ok) {
        toast.success(options.successMessage || "Submitted successfully");
        reset();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading };
};

export default useSubmitForm;