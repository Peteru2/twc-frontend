import { Menu } from "lucide-react";
import { useState } from "react";
import useDashboard from "../hooks/useDashboard";
import { logout } from "../utils/logout";
import { LogOut } from "lucide-react";

const Topbar = () => {
  const { data } = useDashboard();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">

      <h1 className="font-semibold text-lg">
        Dashboard
      </h1>

      <div className="flex items-center gap-5 relative">

        <div 
         onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full cursor-pointer bg-violet-100 flex items-center justify-center">
          <span className="text-violet-900 font-bold uppercase">
            {data?.admin?.name?.charAt(0)}
          </span>
        </div>

        <Menu
          className="text-gray-500 cursor-pointer"
         
        />

        {open && (
          <div className="absolute right-0 bg-transparent  top-12 w-40 ">

            <button
              onClick={logout}
              className="w-full text-left bg-red-100 flex cursor-pointer items-center rounded-xl  px-4 py-2 hover:bg-red-300"
            >
             <span><LogOut size="16" className="mr-2"/></span> Logout
            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default Topbar;