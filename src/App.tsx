import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import './index.css';

function App() {


  return (
   
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route element={<Home /> }  path = "/"/>
       </Route>
        </Routes >
        </BrowserRouter>
      
    
  )
}

export default App
