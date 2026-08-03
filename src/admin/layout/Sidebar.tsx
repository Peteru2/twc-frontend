import {
  LayoutDashboard,
  Newspaper,
  User,
  Users,
  HeartHandshake,
  Globe,
  Cake,
  BookOpenText,
  UserPlus,
  CalendarPlus,
  X,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import useDashboard from "../hooks/useDashboard";
import { useLogout } from "../utils/logout";
import { LogOut } from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();
  const { data } = useDashboard();
  const logout = useLogout();

  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard", link: "/admin/dashboard" },
    { icon: Newspaper, text: "Newsletter", link: "/admin/newsletter" },
    { icon: User, text: "Registered Member", link: "/admin/members" },
    { icon: HeartHandshake, text: "Prayer Requests", link: "/admin/prayer" },
    { icon: Users, text: "First Timers", link: "/admin/firsttimer" },
    { icon: Globe, text: "Online Community", link: "/admin/community" },
    { icon: Cake, text: "Celebrations", link: "/admin/celebrations" },
    { icon: BookOpenText, text: "Sermons", link: "/admin/sermons" },
    { icon: CalendarPlus, text: "Events", link: "/admin/events" },
  ];

  return (
    <aside className="w-64 bg-[#243a5e] text-white rounded-br-2xl h-screen flex flex-col">
      {/* Close Button - Mobile Only */}
      <button
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg z-40"
      >
        <X size={24} />
      </button>

      {/* Sidebar Header */}
      <div className="p-5 border-b border-white/10">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <h2 className="text-lg font-semibold mt-2">{data?.admin?.name || "Admin"}</h2>
        <p className="text-sm text-gray-300 mt-2">Role: {data?.admin?.role || "User"}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.link ||
            (item.link === "/admin/events" && location.pathname === "/admin/event");

          return (
            <Link
              key={item.link}
              to={item.link}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-white text-[#243a5e] font-medium"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm md:text-base">{item.text}</span>
            </Link>
          );
        })}

        {/* Conditional Admin Register Link */}
        {data?.admin?.role === "superadmin" && (
          <Link
            to="/admin/register"
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/admin/register"
                ? "bg-white text-[#243a5e] font-medium"
                : "text-white hover:bg-white/10"
            }`}
          >
            <UserPlus size={20} />
            <span className="text-sm md:text-base">Register Admin</span>
          </Link>
        )}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-white/10 p-3">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm md:text-base"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;