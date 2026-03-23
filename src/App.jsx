import React from "react";
import LdPage from "./component/LdPage";
import './index.css'
import Navbar from "./component/Navbar";
import { BrowserRouter,Routes,  Route } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
  <BrowserRouter>
      <Navbar/>
    
     <Routes>
      <Route path="/" element={<LdPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
       
     </Routes>
  </BrowserRouter>
    
   
  );
}

export default App;