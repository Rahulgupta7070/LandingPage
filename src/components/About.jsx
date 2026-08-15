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


  // =====================================================
  // OPEN VIDEO
  // =====================================================

  const openVideo = () => {
    setIsVideoOpen(true);
  };


  // =====================================================
  // CLOSE VIDEO
  // =====================================================

  const closeVideo = () => {

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsVideoOpen(false);
  };


  // =====================================================
  // FULLSCREEN
  // =====================================================

  const openFullscreen = () => {

    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }

  };


  return (
    <>

      {/* =====================================================
          ABOUT PAGE
      ===================================================== */}

      <section
        className="
          min-h-screen
          bg-[#f8f7f2]
          px-6
          py-16
          sm:px-8
          lg:px-10
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* =================================================
              HEADING
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
              About Me
            </p>


            <h1
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-[#102a43]
                sm:text-5xl
                lg:text-6xl
              "
            >

              A little about me

              <br />

              <span className="text-slate-400">
                and my journey.
              </span>

            </h1>


            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              I'm Rahul Kumar, a Java Developer at Fincart,
              passionate about backend development, problem-solving
              and continuous learning. My journey has been focused
              on building strong Java and Spring Boot skills while
              growing through practical experience.
            </p>

          </div>



          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              mt-16
              grid
              items-center
              gap-14
              lg:grid-cols-2
            "
          >


            {/* =================================================
                LEFT — PROFILE
            ================================================= */}

            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-[#102a43]
                "
              >
                Who I Am
              </h2>


              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                I am Rahul Kumar, currently working as a Java
                Developer at Fincart. I enjoy building backend
                applications, solving programming problems and
                learning new technologies that help me become a
                better developer.
              </p>


              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                I completed my B.Tech in Computer Science
                Engineering from I.K. Gujral Punjab Technical
                University. To strengthen my practical development
                skills, I also completed Java Full Stack training
                from QSpiders, Noida.
              </p>


              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                Along with technical skills, I believe communication,
                consistency and learning with others are important
                parts of professional growth. This is one of the
                reasons I started participating in and building a
                Group Discussion community where students can learn,
                practice and grow together.
              </p>



              {/* =================================================
                  SKILLS / JOURNEY CARDS
              ================================================= */}

              <div
                className="
                  mt-8
                  grid
                  gap-4
                  sm:grid-cols-3
                "
              >


                {/* =================================================
                    DEVELOPMENT
                ================================================= */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >

                  <FiCode
                    className="
                      text-xl
                      text-[#087f5b]
                    "
                  />


                  <h3
                    className="
                      mt-4
                      font-semibold
                      text-[#102a43]
                    "
                  >
                    Development
                  </h3>


                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Java, Spring Boot, REST APIs & Backend
                  </p>

                </div>



                {/* =================================================
                    EDUCATION
                ================================================= */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >

                  <FiBookOpen
                    className="
                      text-xl
                      text-[#087f5b]
                    "
                  />


                  <h3
                    className="
                      mt-4
                      font-semibold
                      text-[#102a43]
                    "
                  >
                    Education
                  </h3>


                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    B.Tech CSE — I.K.G Punjab Technical University
                  </p>

                </div>



                {/* =================================================
                    TRAINING
                ================================================= */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >

                  <FiTarget
                    className="
                      text-xl
                      text-[#087f5b]
                    "
                  />


                  <h3
                    className="
                      mt-4
                      font-semibold
                      text-[#102a43]
                    "
                  >
                    Training
                  </h3>


                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Java Full Stack — QSpiders Noida
                  </p>

                </div>

              </div>

            </div>



            {/* =================================================
                RIGHT — 90 DAYS VIDEO
            ================================================= */}

            <div>


              {/* =================================================
                  VIDEO CARD
              ================================================= */}

              <div
                onClick={openVideo}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#102a43]
                  shadow-[0_25px_70px_rgba(16,42,67,0.15)]
                "
              >


                {/* VIDEO */}

                <video
                  src={commitmentVideo}
                  muted
                  playsInline
                  preload="metadata"
                  className="
                    h-[360px]
                    w-full
                    object-cover
                    opacity-80
                    transition
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-90
                    sm:h-[430px]
                  "
                />


                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    transition
                    duration-300
                    group-hover:bg-black/30
                  "
                />


                {/* PLAY BUTTON */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#102a43]
                      shadow-xl
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  >

                    <FiPlay className="ml-1 text-xl" />

                  </div>

                </div>



                {/* VIDEO TEXT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/50
                    to-transparent
                    p-6
                    pt-24
                  "
                >

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/60
                    "
                  >
                    My Achievement
                  </p>


                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    90 Days Commitment
                  </h3>


                  <p
                    className="
                      mt-1
                      text-sm
                      text-white/70
                    "
                  >
                    Consistency • Discipline • Growth
                  </p>

                </div>

              </div>



              {/* =================================================
                  VIDEO BOTTOM
              ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                "
              >

                <p
                  className="
                    text-xs
                    text-slate-400
                  "
                >
                  Click to watch my 90-day journey
                </p>


                <button
                  onClick={openVideo}
                  className="
                    flex
                    items-center
                    gap-1
                    text-sm
                    font-semibold
                    text-[#087f5b]
                    transition
                    hover:text-[#102a43]
                  "
                >

                  Watch Video

                  <FiArrowUpRight />

                </button>

              </div>

            </div>

          </div>



          {/* =================================================
              JOURNEY SUMMARY
          ================================================= */}

          <div
            className="
              mt-16
              rounded-[2rem]
              border
              border-slate-200
              bg-white
              p-8
              sm:p-10
            "
          >

            <div
              className="
                grid
                gap-8
                md:grid-cols-3
              "
            >


              {/* Fincart */}

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#087f5b]
                  "
                >
                  Currently
                </p>


                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[#102a43]
                  "
                >
                  Java Developer
                </h3>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Working at Fincart and building practical
                  backend development experience.
                </p>

              </div>



              {/* Education */}

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#087f5b]
                  "
                >
                  Education
                </p>


                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[#102a43]
                  "
                >
                  B.Tech — CSE
                </h3>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  I.K. Gujral Punjab Technical University.
                </p>

              </div>



              {/* Training */}

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#087f5b]
                  "
                >
                  Training
                </p>


                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[#102a43]
                  "
                >
                  Java Full Stack
                </h3>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Professional training completed from
                  QSpiders, Noida.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          VIDEO MODAL
      ====================================================== */}

      {isVideoOpen && (

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
        >


          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            onClick={closeVideo}
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



          {/* =================================================
              VIDEO CONTAINER
          ================================================= */}

          <div
            className="
              relative
              w-full
              max-w-5xl
            "
          >


            {/* VIDEO */}

            <video
              ref={videoRef}
              src={commitmentVideo}
              controls
              autoPlay
              playsInline
              className="
                max-h-[85vh]
                w-full
                rounded-2xl
                bg-black
                object-contain
              "
            />



            {/* =================================================
                FULLSCREEN BUTTON
            ================================================= */}

            <button
              onClick={openFullscreen}
              className="
                absolute
                bottom-4
                right-4
                flex
                items-center
                gap-2
                rounded-lg
                bg-black/70
                px-3
                py-2
                text-xs
                font-medium
                text-white
                backdrop-blur-md
                transition
                hover:bg-black
              "
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