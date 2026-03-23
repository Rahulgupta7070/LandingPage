import React, { useState } from "react";

function LdPage() {
  const [data] = useState([
    {
      title: "User Management",
      desc: "Add, update and search users easily"
    },
    {
      title: "Passbook",
      desc: "Track all transactions with date"
    },
    {
      title: "Interest Calculator",
      desc: "Instant maturity calculation"
    }
  ]);

  return (
    <div className="font-sans">

      {/* Top wala */}
      <div className="bg-blue-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Manage Your RD Easily
        </h1>
        <p className="mb-6 text-lg">
          Track savings, calculate interest, and manage accounts in one place
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
{/* 
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          <div className="shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold text-xl mb-2">User Management</h3>
            <p className="text-gray-600">Add, update and search users easily</p>
          </div>
        </div>
      </div>  */}




      {/* Feature */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="shadow-lg p-6 rounded-lg hover:scale-105 transition"
            >
              <h3 className="font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Start Your RD Journey Today 
        </h2>
        <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">
          Create Account
        </button>
      </div>

      {/* Footer  hai*/}
      <div className="bg-gray-900 text-white text-center p-4">
        2026 RD System | Rahul
      </div>

    </div>
  );
}

export default LdPage;