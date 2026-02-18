import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
