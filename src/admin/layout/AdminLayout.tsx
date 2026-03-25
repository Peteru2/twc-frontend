import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import useApi from "../hooks/useApi";

interface AdminLayoutProps {
  children?: React.ReactNode; 
  loading?: boolean
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const {loading} = useApi()
  if (loading) return <p className="p-10">Loading....</p>;

  return (

    <div className="flex bg-gray-100 h-screen overflow-hidden">
      
      {/* 2. Sidebar stays fixed on the left */}
      <Sidebar />

      <div className="flex-1 flex flex-col h-full">
        {/* 3. Topbar stays at the top of this column */}
        <Topbar />

        {/* 4. Only this main area scrolls up and down */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet /> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
