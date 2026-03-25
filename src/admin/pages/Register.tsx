import AdminRegisterForm from "../form/Register"
import useApi from "../hooks/useApi";
import { registerAdmin } from "../services/authServices";
const AdminRegisterPage = () => {
  const { request, loading } = useApi();

const handleRegister = async (data: any) => {
  await request(() => registerAdmin(data), "Admin registered successfully!");
};
  return <AdminRegisterForm onSubmit={handleRegister} loading={loading} />;
};

export default AdminRegisterPage;


