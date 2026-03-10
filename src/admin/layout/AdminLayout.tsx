import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AdminLayoutProps {
  children?: React.ReactNode; 
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
          <Outlet /> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
