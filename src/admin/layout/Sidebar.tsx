import {
  LayoutDashboard,
  User,
  Users,
  HeartHandshake,
  Globe,
  Cake
} from "lucide-react";
import { useLocation, Link } from "react-router-dom"
import useDashboard from "../hooks/useDashboard";

const Sidebar = () => {
    const location = useLocation(); 
    const {data} = useDashboard()
  return (
    <aside className="w-64 bg-[#243a5e] text-white p-5 rounded-br-2xl">

     <h2 className="text-2xl font-semibold">
        Welcome 
      </h2>
       <h2 className="text-lg font-semibold ">
         {data?.admin?.name}
      </h2>

      <p className="text-sm text-gray-300 mb-6">
        Role: {data?.admin?.role}
        
      </p>

      <nav className="space-y-3">

        <SidebarItem icon={LayoutDashboard} text="Dashboard" link="/admin/dashboard"  active={location.pathname === "/admin/dashboard"}  />

        <SidebarItem icon={User} text="Registered Member" link="/admin/members"    active={location.pathname === "/admin/members"} />

        <SidebarItem icon={HeartHandshake} text="Prayer Requests" link="/admin/prayer"    active={location.pathname === "/admin/prayer"} />

        <SidebarItem icon={Users} text="First Timers" link="/admin/firsttimer"    active={location.pathname === "/admin/firsttimer"} />

        <SidebarItem icon={Globe} text="Online Community" link="/admin/community"    active={location.pathname === "/admin/community"} />

        <SidebarItem icon={Cake} text="Celebrations" link="/admin/celebrations"    active={location.pathname === "/admin/celebrations"} />

        <SidebarItem icon={Cake} text="Sermons" link="/admin/sermons"    active={location.pathname === "/admin/sermons"} />


      </nav>
    </aside>
  );
};

const SidebarItem = ({
  icon: Icon,
  text,
  active,
  link
}: any) => (
  <Link to={link}
    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
      active ? "bg-white text-black" : "hover:bg-white/20"
    }`}
  >
    <Icon size={18} /><span>{text}</span>
    
  </Link>
);

export default Sidebar;