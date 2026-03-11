import { Menu } from "lucide-react";
import useDashboard from "../hooks/useDashboard";


const Topbar = () => {
  const { data } = useDashboard();

  return (
    <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">

      <h1 className="font-semibold text-lg">
        Dashboard
      </h1>

      <div className="flex items-center gap-5 relative">

        <div 

        className="w-10 h-10 rounded-full cursor-pointer bg-violet-100 flex items-center justify-center">
          <span className="text-violet-900 font-bold uppercase">
            {data?.admin?.name?.charAt(0)}
          </span>
        </div>

        <Menu
          className="text-gray-500 cursor-pointer"
         
        />

        

      </div>

    </div>
  );
};

export default Topbar;