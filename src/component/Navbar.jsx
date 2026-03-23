import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      <h1 className="text-2xl font-bold text-blue-600">
        RD System
      </h1>

    
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
         <NavLink
          to="/" 
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <a href="#" className="hover:text-blue-600">Home</a> 
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">About</a>
      </div>

   <Link to="/login">
      <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        Login
      </button>
    </Link>
    </nav>
  );
}

export default Navbar;