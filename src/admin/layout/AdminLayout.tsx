import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AdminLayoutProps {
  children?: React.ReactNode;
  loading?: boolean;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex bg-gray-100 h-screen overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={handleSidebarClose}
        />
      )}

      {/* Sidebar - Hidden on mobile, visible on md and up */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-30 transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={handleSidebarClose} />
      </div>

      <div className="flex-1 flex flex-col h-full w-full min-w-0">
        {/* Topbar */}
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
          <Outlet />
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;