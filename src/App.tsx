import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import "./index.css";
import About from "./pages/About";
import ScrollToTop from "./components/common/ScrollToTop";
import Event from "./pages/Event";
import Sermons from "./pages/Sermons";
import Give from "./pages/Giving";
import MembershipForm from "./pages/MembershipForm";
import PrayerRequest from "./pages/PrayerRequest";
import FirstTimersForm from "./pages/FirstTimersForm";
import OnlineCommunity from "./pages/OnlineCommunity";
import CelebrationRequest from "./pages/CelebrationRequest";
import Rna from "./pages/Rna";
import { AudioProvider } from "./context/AudioContext";
import AdminRegisterPage from "./admin/pages/Register";
import AdminLoginPage from "./admin/pages/Login";
import ProtectedRoute from "./admin/ProtectedRoutes";
import AddSermonPage from "./admin/pages/AddSermon";
import Dashboard  from "./admin/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PastoralTeam from "./pages/PastoralTeam";
import AdminLayout from "./admin/layout/AdminLayout";
import ViewAllSermons from "./admin/pages/ViewAllSermons";
import AdminCelebrations from "./admin/pages/AdminCelebration";
import AdminFirstTimers from "./admin/pages/AdminFirstTimer";
function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="about" />
            <Route element={<Event />} path="event" />
            <Route element={<Sermons />} path="sermons" />
            <Route element={<Give />} path="give" />
            <Route element={<MembershipForm />} path="members" />
            <Route element={<PrayerRequest />} path="prayer" />
            <Route element={<FirstTimersForm />} path="firsttimer" />
            <Route element={<OnlineCommunity />} path="onlinecommunity" />
            <Route element={<CelebrationRequest />} path="celebration" />
            <Route element={<Rna />} path="rna" />
            <Route element={<PastoralTeam />} path="pastoralteam" />

          </Route>
          <Route path="/admin/login" element={<AdminLoginPage />} />


          <Route
            path="/admin/register"
            element={
              <ProtectedRoute allowedRoles={"superadmin"}>
                <AdminRegisterPage />
              </ProtectedRoute>
            }
          />

           <Route element={<AdminLayout />}>
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                  />
                  
                   <Route
                  path="/admin/sermons"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                      <ViewAllSermons />
                    </ProtectedRoute>
                  }
                  />
                  <Route
                  path="/admin/celebrations"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                      <AdminCelebrations />
                    </ProtectedRoute>
                  }
                  />

                  <Route
                  path="/admin/firsttimer"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                      <AdminFirstTimers />
                    </ProtectedRoute>
                  }
                  />
          </Route>
        
         <Route
            path="/admin/addsermon"
            element={
              <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                <AddSermonPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
       <ToastContainer position="top-right" autoClose={3000} />
    </AudioProvider>
  );
}

export default App;
