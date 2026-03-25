import AdminLoginForm from "../form/Login";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";
import { loginAdmin } from "../services/authServices";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const { request, loading } = useApi();

const handleLogin = async (data: any) => {
   await request(() => loginAdmin(data), "Login successful!");
  navigate("/admin/dashboard");
};

  return <AdminLoginForm onSubmit={handleLogin} loading={loading} />;
};

export default AdminLoginPage;