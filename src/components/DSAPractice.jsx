import React, { useState } from "react";

import {
  FiGithub,
  FiGitBranch,
  FiCode,
  FiUsers,
  FiArrowUpRight,
  FiCheckCircle,
  FiX,
  FiMaximize,
} from "react-icons/fi";

import githubFirst from "../assets/githum first.jpg";
import githubSecond from "../assets/github second.jpg";


function DSAPractice() {

  const [selectedImage, setSelectedImage] = useState(null);


  // =====================================================
  // TEAM MEMBERS / BRANCHES
  // =====================================================

  const members = [
    "shivam_kumar",
    "Aaditya_Kumar1",
    "Rishabh_kumar",
    "sahil",
    "Md_Imran",
    "manish_kumar",
    "sumit_raj",
    "Javed_Akhtar",
    "prashant",
    "dheeraj_mishra",
    "Aditya_Kumar",
    "MOHD_KAMRUDDEEN",
  ];


  return (
    <>
      {/* =================================================
          MAIN PAGE
      ================================================= */}

      <section
        id="dsa"
        className="bg-[#f8f7f2] px-6 py-20 sm:px-8 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">


          {/* =================================================
              HEADER
          ================================================= */}

          <div className="max-w-3xl">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#087f5b]
              "
            >
              DSA Practice
            </p>


            <h1
              className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                text-[#102a43]
                sm:text-5xl
              "
            >
              Practice DSA together.
            </h1>


            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              Our members practice programming and DSA questions
              together using GitHub. Every member has a separate
              branch where they upload and maintain their practice
              solutions.
            </p>

          </div>



          {/* =================================================
              GITHUB REPOSITORY CARD
          ================================================= */}

          <div
            className="
              mt-12
              overflow-hidden
              rounded-[2rem]
              bg-[#102a43]
              p-7
              shadow-sm
              sm:p-10
            "
          >

            <div
              className="
                flex
                flex-col
                gap-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-[#74c69d]
                    "
                  >
                    <FiGithub className="text-2xl" />
                  </div>


                  <div>

                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      GitHub Repository
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      CareerCircle
                    </h2>

                  </div>

                </div>


                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                  Collaborative coding practice repository where
                  CareerCircle members solve assigned programming
                  and DSA questions.
                </p>


                {/* Repository Info */}

                <div className="mt-6 flex flex-wrap gap-3">

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/10
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-slate-200
                    "
                  >
                    <FiCode />
                    DSA Practice
                  </span>


                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/10
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-slate-200
                    "
                  >
                    <FiGitBranch />
                    Individual Branches
                  </span>


                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/10
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-slate-200
                    "
                  >
                    <FiUsers />
                    Team Practice
                  </span>

                </div>

              </div>


              {/* GitHub Button */}

              <a
                href="https://github.com/Rahulgupta7070/career-circle"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#087f5b]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-[#102a43]
                "
              >

                View GitHub

                <FiArrowUpRight />

              </a>

            </div>

          </div>



          {/* =================================================
              GITHUB SCREENSHOTS
          ================================================= */}

          <div className="mt-16">

            <div className="max-w-2xl">

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#087f5b]
                "
              >
                Our Practice Setup
              </p>


              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-[#102a43]
                  sm:text-4xl
                "
              >
                Everyone practices on GitHub.
              </h2>


              <p className="mt-4 text-sm leading-7 text-slate-500">
                We use separate GitHub branches so every member can
                maintain their own DSA practice and track their progress.
              </p>

            </div>


            {/* Images */}

            <div className="mt-8 grid gap-8 lg:grid-cols-2">


              {/* =================================================
                  FIRST IMAGE
              ================================================= */}

              <div>

                <button
                  onClick={() => setSelectedImage(githubFirst)}
                  className="
                    group
                    relative
                    block
                    w-full
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                  "
                >

                  <img
                    src={githubFirst}
                    alt="CareerCircle GitHub repository"
                    className="
                      h-[360px]
                      w-full
                      object-cover
                      object-top
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />


                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition
                      duration-300
                      group-hover:bg-black/30
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        scale-75
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#102a43]
                        opacity-0
                        shadow-lg
                        transition
                        duration-300
                        group-hover:scale-100
                        group-hover:opacity-100
                      "
                    >
                      <FiMaximize />
                    </div>

                  </div>

                </button>


                <div className="mt-4">

                  <h3 className="font-bold text-[#102a43]">
                    CareerCircle GitHub Repository
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Our collaborative DSA practice repository.
                  </p>

                </div>

              </div>



              {/* =================================================
                  SECOND IMAGE
              ================================================= */}

              <div>

                <button
                  onClick={() => setSelectedImage(githubSecond)}
                  className="
                    group
                    relative
                    block
                    w-full
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                  "
                >

                  <img
                    src={githubSecond}
                    alt="CareerCircle GitHub branches"
                    className="
                      h-[360px]
                      w-full
                      object-cover
                      object-top
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />


                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition
                      duration-300
                      group-hover:bg-black/30
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        scale-75
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#102a43]
                        opacity-0
                        shadow-lg
                        transition
                        duration-300
                        group-hover:scale-100
                        group-hover:opacity-100
                      "
                    >
                      <FiMaximize />
                    </div>

                  </div>

                </button>


                <div className="mt-4">

                  <h3 className="font-bold text-[#102a43]">
                    Individual Member Branches
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Each member gets a separate branch for practice.
                  </p>

                </div>

              </div>

            </div>

          </div>



          {/* =================================================
              HOW WE PRACTICE
          ================================================= */}

          <div className="mt-16">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#087f5b]
              "
            >
              How We Practice
            </p>


            <h2 className="mt-3 text-3xl font-bold text-[#102a43]">
              Everyone gets their own branch.
            </h2>


            <div className="mt-8 grid gap-5 md:grid-cols-3">


              {/* STEP 01 */}

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#087f5b]/10
                    font-bold
                    text-[#087f5b]
                  "
                >
                  01
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#102a43]">
                  Practice Questions
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Solve assigned programming and DSA questions
                  regularly.
                </p>

              </div>



              {/* STEP 02 */}

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#087f5b]/10
                    font-bold
                    text-[#087f5b]
                  "
                >
                  02
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#102a43]">
                  Push Your Solution
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Upload your solutions to your individual GitHub
                  branch.
                </p>

              </div>



              {/* STEP 03 */}

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#087f5b]/10
                    font-bold
                    text-[#087f5b]
                  "
                >
                  03
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#102a43]">
                  Discuss & Improve
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Discuss approaches and learn from other members.
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              MEMBERS
          ================================================= */}

          <div className="mt-16">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#087f5b]
                  "
                >
                  Team Branches
                </p>


                <h2 className="mt-3 text-3xl font-bold text-[#102a43]">
                  Our DSA practice branches
                </h2>

              </div>


              <div className="flex items-center gap-2 text-sm text-slate-500">

                <FiUsers className="text-[#087f5b]" />

                {members.length} member branches

              </div>

            </div>


            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {members.map((member, index) => (

                <div
                  key={member}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#087f5b]/30
                    hover:shadow-md
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#102a43]
                        text-[#74c69d]
                      "
                    >
                      <FiGitBranch />
                    </div>


                    <div>

                      <p className="text-xs text-slate-400">
                        Branch {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-1 text-sm font-semibold text-[#102a43]">
                        {member}
                      </h3>

                    </div>

                  </div>


                  <FiCheckCircle className="text-[#087f5b]" />

                </div>

              ))}

            </div>

          </div>



          {/* =================================================
              FINAL CTA
          ================================================= */}

          <div
            className="
              mt-16
              rounded-[2rem]
              border
              border-[#087f5b]/20
              bg-[#087f5b]/5
              p-8
              text-center
              sm:p-10
            "
          >

            <FiCode className="mx-auto text-3xl text-[#087f5b]" />


            <h2 className="mt-4 text-2xl font-bold text-[#102a43] sm:text-3xl">
              Practice. Commit. Learn. Grow.
            </h2>


            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              The goal is not just to solve questions. We practice
              consistently, share our approaches and help each other
              become better problem solvers.
            </p>


            <a
              href="https://github.com/Rahulgupta7070/career-circle"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#102a43]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#087f5b]
              "
            >
              Explore Repository
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </section>



      {/* =====================================================
          FULL SCREEN IMAGE MODAL
      ===================================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* Close */}

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            <FiX className="text-xl" />
          </button>


          {/* Full Image */}

          <img
            src={selectedImage}
            alt="GitHub Screenshot"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[92vh]
              max-w-[95vw]
              rounded-xl
              object-contain
              shadow-2xl
            "
          />

        </div>

      )}

    </>
  );
}

export default DSAPractice;