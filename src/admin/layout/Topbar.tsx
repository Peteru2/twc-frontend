import { Menu } from "lucide-react";
import useDashboard from "../hooks/useDashboard";

interface TopbarProps {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
}

const Topbar = ({ onMenuClick, sidebarOpen }: TopbarProps) => {
  const { data } = useDashboard();

  return (
    <div className="bg-white shadow-sm px-3 sm:px-4 md:px-6 py-3 md:py-4 flex items-center justify-between sticky top-0 z-10">
      {/* Left Side - Menu Button + Title */}
      <div className="flex items-center gap-3 md:gap-0">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} className={sidebarOpen ? "text-red-600" : "text-gray-700"} />
        </button>

        {/* Page Title */}
        <h1 className="font-semibold text-base md:text-lg text-gray-800">Dashboard</h1>
      </div>

      {/* Right Side - Admin Avatar */}
      <div className="flex items-center gap-3 md:gap-5">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-violet-100 flex items-center justify-center cursor-pointer hover:bg-violet-200 transition-colors">
          <span className="text-violet-900 font-bold uppercase text-sm md:text-base">
            {data?.admin?.name?.charAt(0) || "A"}
          </span>
        </div>

        {/* Optional: Admin Name - Hidden on very small screens */}
        <div className="hidden sm:block">
          <p className="text-xs md:text-sm text-gray-700 font-medium truncate">
            {data?.admin?.name || "Admin"}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            {data?.admin?.role || "user"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;