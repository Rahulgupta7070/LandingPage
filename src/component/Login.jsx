import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">

       
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome Back 
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

       
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

       

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;