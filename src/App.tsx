import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import './index.css';
import About from "./pages/About";
import ScrollToTop from "./components/common/ScrollToTop";
import Event from "./pages/Event";
import Sermons from "./pages/Sermons";
import Give from "./pages/Giving";
import MembershipForm from "./pages/MembershipForm";
import PrayerRequest from "./pages/PrayerRequest";
import FirstTimersForm from "./pages/FirstTimersForm";
import OnlineCommunity from "./pages/OnlineCommunity";

function App() {


  return (
   
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
        <Route element={<Home /> }  path = "/"/>n
        <Route element={<About />} path="about" />
        <Route element={<Event />} path="event" />
        <Route element={<Sermons />} path="sermons" />
        <Route element={<Give />} path="give" />
        <Route element={<MembershipForm />} path="members" />
        <Route element={<PrayerRequest />} path="prayer" />
        <Route element={<FirstTimersForm />} path="firsttimer" />
        <Route element={<OnlineCommunity />} path="onlinecommunity" />




        


       </Route>
        </Routes >
        </BrowserRouter>
      
    
  )
}

export default App
