import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import './index.css';
import About from "./pages/About";

function App() {


  return (
   
    <BrowserRouter>
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
