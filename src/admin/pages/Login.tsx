import AdminLoginForm from "../form/Login";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: any) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Login failed");
        return;
      }

      
      localStorage.setItem("token", result.token);

      alert("Login successful!");

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return <AdminLoginForm onSubmit={handleLogin} />;
};

export default AdminLoginPage;