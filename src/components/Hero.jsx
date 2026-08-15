import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";

import profileImage from "../assets/profile.jpeg";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f8f7f2]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-82px)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-semibold text-[#087f5b]">
              Java Developer @ Fincart
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-[#102a43] sm:text-6xl lg:text-7xl">
              Rahul Kumar
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-600 sm:text-3xl">
              Building skills. Sharing knowledge.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              I am a Java Developer passionate about backend development,
              learning and helping students grow through practical
              Group Discussions and meaningful conversations.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              <a
               href="#join"
                className="group flex items-center gap-2 rounded-full bg-[#102a43] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#087f5b]"
              >
                Explore GD Community

                <FiArrowUpRight className="transition duration-300 group-hover:rotate-45" />
              </a>

           <Link
  to="/about"
  className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#102a43] transition duration-300 hover:bg-[#102a43] hover:text-white"
>
  About Me
</Link>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">

             <a
  href="https://www.linkedin.com/in/kumarrahulgupta/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#102a43] hover:bg-[#102a43] hover:text-white"
>
  <FiLinkedin />
</a>
              <a
                href="https://github.com/Rahulgupta7070"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#102a43] hover:bg-[#102a43] hover:text-white"
              >
                <FiGithub />
              </a>
                {/* LeetCode */}
  <a
    href="https://leetcode.com/u/Rahulll_1_29/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#FFA116] hover:bg-[#FFA116] hover:text-white"
  >
    <SiLeetcode />
  </a>

              <span className="ml-2 text-sm text-slate-400">
                Connect with me
              </span>

            </div>

          </div>

{/* ================= RIGHT ================= */}

<div className="flex justify-center lg:justify-end">

  <div className="text-center">

    {/* Profile Image */}
    <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-[#102a43] shadow-[0_20px_50px_rgba(16,42,67,0.15)] sm:h-80 sm:w-80">

      <img
        src={profileImage}
        alt="Rahul Kumar"
        className="h-full w-full object-cover object-center"
      />

    </div>

    {/* Profile Info */}
    <div className="mt-6">

      <h3 className="text-xl font-bold text-[#102a43]">
        Rahul Kumar
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Java Developer • Community Builder
      </p>

    </div>

  </div>

</div>
         

        </div>

      </div>
    </section>
  );
}

export default Hero;