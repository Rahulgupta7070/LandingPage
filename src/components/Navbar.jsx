import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMessageCircle, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "GD Community",
      path: "/community",
    },
    {
      name: "How We Grow",
      path: "/growth",
    },
    {
      name: "Topics",
      path: "/topics",
    },
    {
  name: "Sessions",
  path: "/feedback",
},
  ];

  const navLinkClass = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? "font-semibold text-[#087f5b]"
        : "text-gray-600 hover:text-[#087f5b]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-[#f8f7f2]/95 px-6 py-4 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#102a43] text-sm font-bold text-white">
            RK
          </div>

          <div>
            <h1 className="text-lg font-bold text-[#102a43]">
              Rahul Kumar
            </h1>

            <p className="text-xs text-gray-500">
              Java Developer
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        {/* Join GD */}
        <a
          href="YOUR_TOPMATE_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#087f5b] px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#102a43]"
        >
          <FiMessageCircle />

          Join GD

          <FiArrowUpRight />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;