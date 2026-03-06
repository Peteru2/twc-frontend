import AdminRegisterForm from "../form/Register"

const AdminRegisterPage = () => {
  const handleRegister = async (data:any) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Registration failed");
        return;
      }

      alert("Admin registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return <AdminRegisterForm onSubmit={handleRegister} />;
};

export default AdminRegisterPage;


