import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import './index.css';
import About from "./pages/About";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {


  return (
   
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
        <Route element={<Home /> }  path = "/"/>
        <Route element={<About />} path="about" />
       </Route>
        </Routes >
        </BrowserRouter>
      
    
  )
}

export default App
