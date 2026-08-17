import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FiMessageCircle,
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();


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
      name: "DSA Practice",
      path: "/dsa",
    },
    {
      name: "Feedback",
      path: "/feedback",
    },
  ];


  const navLinkClass = ({ isActive }) =>
    `
      whitespace-nowrap
      transition
      duration-200

      ${
        isActive
          ? "font-semibold text-[#087f5b] dark:text-[#74c69d]"
          : "text-gray-600 hover:text-[#087f5b] dark:text-gray-300 dark:hover:text-[#74c69d]"
      }
    `;


  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (

    <nav
      className="
        sticky
        top-0
        z-50

        border-b
        border-gray-200

        bg-[#f8f7f2]/95

        px-4
        py-3

        backdrop-blur-md

        transition-colors
        duration-300

        dark:border-slate-700
        dark:bg-[#0f172a]/95

        sm:px-6
        sm:py-4
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          gap-3
        "
      >


        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          onClick={closeMenu}
          className="
            flex
            shrink-0
            items-center
            gap-2
            sm:gap-3
          "
        >

          {/* Logo Circle */}

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-[#102a43]

              text-xs
              font-bold
              text-white

              transition-colors
              duration-300

              dark:bg-[#1e293b]

              sm:h-11
              sm:w-11
              sm:text-sm
            "
          >
            CC
          </div>


          {/* Brand */}

          <div>

            <h1
              className="
                text-base
                font-bold

                text-[#102a43]

                transition-colors
                duration-300

                dark:text-white

                sm:text-lg
              "
            >
              Career
              <span className="text-[#087f5b] dark:text-[#74c69d]">
                Circle
              </span>
            </h1>


            <p
              className="
                hidden
                text-xs
                text-gray-500

                dark:text-gray-400

                sm:block
              "
            >
              Learn • Discuss • Grow
            </p>

          </div>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-5
            lg:flex
            xl:gap-6
          "
        >

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


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="flex items-center gap-2 sm:gap-3">


          {/* =================================================
              DARK / LIGHT MODE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-slate-300

              bg-white

              text-[#102a43]

              transition
              duration-300

              hover:bg-[#102a43]
              hover:text-white

              dark:border-slate-600
              dark:bg-[#1e293b]
              dark:text-yellow-300
              dark:hover:bg-[#334155]

              sm:h-11
              sm:w-11
            "
          >

            {darkMode ? (
              <FiSun className="text-lg sm:text-xl" />
            ) : (
              <FiMoon className="text-lg sm:text-xl" />
            )}

          </button>


          {/* =================================================
              DESKTOP JOIN GD
          ================================================= */}

          <Link
            to="/join"
            className="
              hidden
              shrink-0
              items-center
              gap-2

              rounded-full

              bg-[#087f5b]

              px-5
              py-2.5

              text-sm
              font-semibold
              text-white

              transition
              duration-200

              hover:bg-[#102a43]

              dark:hover:bg-[#74c69d]
              dark:hover:text-[#0f172a]

              lg:flex
            "
          >

            <FiMessageCircle />

            <span>Join GD</span>

            <FiArrowUpRight />

          </Link>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <div className="flex items-center lg:hidden">

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-slate-200

                bg-white

                text-[#102a43]

                transition

                hover:bg-[#102a43]
                hover:text-white

                dark:border-slate-600
                dark:bg-[#1e293b]
                dark:text-white
                dark:hover:bg-[#334155]
              "
            >

              {isMenuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}

            </button>

          </div>

        </div>

      </div>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      {isMenuOpen && (

        <div
          className="
            border-t
            border-gray-200

            dark:border-slate-700

            lg:hidden
          "
        >

          <div
            className="
              mx-auto
              max-w-7xl

              px-1
              pb-4
              pt-4
            "
          >

            <div
              className="
                flex
                flex-col
                gap-1
              "
            >


              {/* Mobile Links */}

              {navLinks.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
                      rounded-xl

                      px-4
                      py-3

                      text-sm

                      transition
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-[#087f5b]/10
                            font-semibold
                            text-[#087f5b]

                            dark:bg-[#74c69d]/10
                            dark:text-[#74c69d]
                          `
                          : `
                            text-gray-600

                            hover:bg-white
                            hover:text-[#087f5b]

                            dark:text-gray-300
                            dark:hover:bg-slate-800
                            dark:hover:text-[#74c69d]
                          `
                      }
                    `
                  }
                >
                  {link.name}
                </NavLink>

              ))}


              {/* =================================================
                  MOBILE JOIN COMMUNITY
              ================================================= */}

              <Link
                to="/join"
                onClick={closeMenu}
                className="
                  mt-2

                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[#102a43]

                  px-4
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  transition

                  hover:bg-[#087f5b]

                  dark:bg-[#1e293b]
                  dark:hover:bg-[#087f5b]
                "
              >

                <FiMessageCircle />

                Join Our Community

                <FiArrowUpRight />

              </Link>


              {/* =================================================
                  MOBILE THEME BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={toggleTheme}
                className="
                  mt-1

                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  px-4
                  py-3

                  text-sm
                  font-semibold

                  text-[#102a43]

                  transition

                  hover:bg-slate-100

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                  dark:hover:bg-slate-700
                "
              >

                {darkMode ? (
                  <>
                    <FiSun className="text-lg text-yellow-400" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon className="text-lg" />
                    Dark Mode
                  </>
                )}

              </button>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}


export default Navbar;