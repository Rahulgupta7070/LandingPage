import React, { useRef, useState } from "react";
import {
  FiPlay,
  FiX,
  FiMaximize,
  FiArrowUpRight,
  FiCode,
  FiTarget,
  FiBookOpen,
} from "react-icons/fi";

import commitmentVideo from "../assets/90-day-commitment.mp4";

function About() {
  const videoRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsVideoOpen(false);
  };

  const openFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <>
      {/* ================= ABOUT PAGE ================= */}

      <section className="min-h-screen bg-[#f8f7f2] px-6 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          {/* ================= HEADING ================= */}

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
              About Me
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#102a43] sm:text-5xl lg:text-6xl">
              A little about me
              <br />
              <span className="text-slate-400">
                and my journey.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I'm Rahul Kumar, a Java Developer at Fincart. I enjoy
              building backend solutions, learning new technologies,
              solving problems and continuously improving myself.
            </p>

          </div>


          {/* ================= MAIN CONTENT ================= */}

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">


            {/* ================= LEFT : PROFILE ================= */}

            <div>

              <h2 className="text-2xl font-bold text-[#102a43]">
                Who I Am
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                My professional journey is focused on Java backend
                development and building practical software solutions.
                I work with technologies such as Java, Spring Boot,
                REST APIs and databases.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                But my growth is not limited to technical skills.
                I strongly believe that communication, confidence,
                consistency and the ability to learn from others are
                equally important for a successful career.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                This mindset has helped me take different challenges
                and push myself outside my comfort zone.
              </p>


              {/* ================= SKILLS ================= */}

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                {/* Java */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <FiCode className="text-xl text-[#087f5b]" />

                  <h3 className="mt-4 font-semibold text-[#102a43]">
                    Development
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Java, Spring Boot & Backend
                  </p>

                </div>


                {/* Learning */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <FiBookOpen className="text-xl text-[#087f5b]" />

                  <h3 className="mt-4 font-semibold text-[#102a43]">
                    Learning
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Continuous learning & improvement
                  </p>

                </div>


                {/* Goals */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <FiTarget className="text-xl text-[#087f5b]" />

                  <h3 className="mt-4 font-semibold text-[#102a43]">
                    Growth
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Consistency & discipline
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT : VIDEO ================= */}

            <div>

              <div
                onClick={openVideo}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-[#102a43] shadow-[0_25px_70px_rgba(16,42,67,0.15)]"
              >

                {/* Video */}

                <video
                  src={commitmentVideo}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-[360px] w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90 sm:h-[430px]"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/30" />


                {/* Play */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#102a43] shadow-xl transition duration-300 group-hover:scale-110">

                    <FiPlay className="ml-1 text-xl" />

                  </div>

                </div>


                {/* Video Text */}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-24">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    My Achievement
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    90 Days Commitment
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Consistency • Discipline • Growth
                  </p>

                </div>

              </div>


              {/* Video Bottom */}

              <div className="mt-4 flex items-center justify-between">

                <p className="text-xs text-slate-400">
                  Click to watch my 90-day journey
                </p>

                <button
                  onClick={openVideo}
                  className="flex items-center gap-1 text-sm font-semibold text-[#087f5b] transition hover:text-[#102a43]"
                >
                  Watch Video
                  <FiArrowUpRight />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEO MODAL
      ====================================================== */}

      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">

          {/* Close Button */}

          <button
            onClick={closeVideo}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <FiX className="text-xl" />
          </button>


          {/* Video */}

          <div className="relative w-full max-w-5xl">

            <video
              ref={videoRef}
              src={commitmentVideo}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-full rounded-2xl bg-black object-contain"
            />

            {/* Fullscreen */}

            <button
              onClick={openFullscreen}
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-black/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black"
            >
              <FiMaximize />

              Fullscreen
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default About;