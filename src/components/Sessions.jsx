import React, { useState } from "react";

import {
  FiCalendar,
  FiUsers,
  FiMessageCircle,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";

// =====================================================
// IMAGES
// =====================================================

import firstImage from "../assets/Prasant First.png";
import secondImage from "../assets/Evening second.png";
import thirdImage from "../assets/GD Third.png";

// =====================================================
// VIDEO
// =====================================================

import adityaVideo from "../assets/Aditya Video.10.mp4";


// =====================================================
// SESSIONS COMPONENT
// =====================================================

function Sessions() {

  // Full screen image
  const [selectedImage, setSelectedImage] = useState(null);


  return (

    <section
      id="sessions"
      className="bg-[#f8f7f2] px-6 py-20 sm:px-8 lg:px-10"
    >

      <div className="mx-auto max-w-7xl">


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
            Our Journey
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-[#102a43] sm:text-5xl">

            Started small.
            <br />

            Growing together.

          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

            What started with just two people slowly became a growing
            community. Every discussion brought more students,
            more conversations and more learning.

          </p>

        </div>



        {/* =================================================
            JOURNEY
        ================================================= */}

        <div className="mt-14">

          <div
            className="
              grid
              items-center
              gap-5
              lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]
            "
          >


            {/* =================================================
                STEP 01
            ================================================= */}

            <div className="group">

              {/* Image */}

              <div
                onClick={() => setSelectedImage(firstImage)}
                className="
                  cursor-pointer
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <img
                  src={firstImage}
                  alt="First Group Discussion"
                  className="
                    h-64
                    w-full
                    rounded-[1.2rem]
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />

              </div>


              {/* Text */}

              <div className="mt-4">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f5b]">
                  Step 01
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#102a43]">
                  We Started
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Just 2 people started the discussion.
                </p>

              </div>

            </div>



            {/* =================================================
                ARROW 01
            ================================================= */}

            <div className="hidden items-center justify-center lg:flex">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#087f5b]/30
                  bg-white
                  text-[#087f5b]
                  shadow-sm
                "
              >

                <FiArrowRight />

              </div>

            </div>



            {/* =================================================
                STEP 02
            ================================================= */}

            <div className="group">

              {/* Image */}

              <div
                onClick={() => setSelectedImage(secondImage)}
                className="
                  cursor-pointer
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <img
                  src={secondImage}
                  alt="Second Group Discussion"
                  className="
                    h-64
                    w-full
                    rounded-[1.2rem]
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />

              </div>


              {/* Text */}

              <div className="mt-4">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f5b]">
                  Step 02
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#102a43]">
                  More People Joined
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  The group grew to around 4 people.
                </p>

              </div>

            </div>



            {/* =================================================
                ARROW 02
            ================================================= */}

            <div className="hidden items-center justify-center lg:flex">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#087f5b]/30
                  bg-white
                  text-[#087f5b]
                  shadow-sm
                "
              >

                <FiArrowRight />

              </div>

            </div>



            {/* =================================================
                STEP 03
            ================================================= */}

            <div className="group">

              {/* Image */}

              <div
                onClick={() => setSelectedImage(thirdImage)}
                className="
                  cursor-pointer
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <img
                  src={thirdImage}
                  alt="Third Group Discussion"
                  className="
                    h-64
                    w-full
                    rounded-[1.2rem]
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />

              </div>


              {/* Text */}

              <div className="mt-4">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f5b]">
                  Step 03
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#102a43]">
                  Growing Community
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Now 12–15 students participate together.
                </p>

              </div>

            </div>



            {/* =================================================
                ARROW 03
            ================================================= */}

            <div className="hidden items-center justify-center lg:flex">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#087f5b]/30
                  bg-white
                  text-[#087f5b]
                  shadow-sm
                "
              >

                <FiArrowRight />

              </div>

            </div>



            {/* =================================================
                STEP 04 — YOU
            ================================================= */}

            <div className="group">


              {/* YOU CARD */}

              <div
                className="
                  relative
                  flex
                  h-[280px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-[#102a43]
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div className="text-center">


                  {/* YOU CIRCLE */}

                  <div
                    className="
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-[#74c69d]
                      bg-white
                      text-2xl
                      font-bold
                      text-[#102a43]
                    "
                  >

                    YOU

                  </div>


                  <p className="mt-5 text-lg font-bold text-white">
                    Your Turn
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Join the journey.
                  </p>

                </div>

              </div>


              {/* Text */}

              <div className="mt-4">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f5b]">
                  Step 04
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#102a43]">
                  YOU
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  The next person in our community can be you.
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              MOBILE JOURNEY TEXT
          ================================================= */}

          <div className="mt-8 text-center lg:hidden">

            <p className="text-sm font-medium text-slate-500">

              Started with 2 → grew to 4 → now 12–15 → your turn

            </p>

          </div>

        </div>



        {/* =================================================
            SESSION FEATURES
        ================================================= */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">


          {/* Small Batches */}

          <div
            className="
              rounded-[1.5rem]
              border
              border-slate-200
              bg-white
              p-7
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#087f5b]/10
                text-xl
                text-[#087f5b]
              "
            >

              <FiUsers />

            </div>

            <h3 className="mt-5 text-xl font-bold text-[#102a43]">
              Small Batches
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Around 10–15 students participate in each group
              discussion so everyone gets a chance to speak.

            </p>

          </div>



          {/* Interview Style */}

          <div
            className="
              rounded-[1.5rem]
              border
              border-slate-200
              bg-white
              p-7
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#087f5b]/10
                text-xl
                text-[#087f5b]
              "
            >

              <FiMessageCircle />

            </div>

            <h3 className="mt-5 text-xl font-bold text-[#102a43]">
              Interview Style
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Discussions are conducted like interviews with
              questions, answers and cross-questioning.

            </p>

          </div>



          {/* Sunday Sessions */}

          <div
            className="
              rounded-[1.5rem]
              border
              border-slate-200
              bg-white
              p-7
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#087f5b]/10
                text-xl
                text-[#087f5b]
              "
            >

              <FiCalendar />

            </div>

            <h3 className="mt-5 text-xl font-bold text-[#102a43]">
              Sunday Sessions
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Regular discussions where students learn from each
              other and hear real placement experiences.

            </p>

          </div>

        </div>



        {/* =================================================
            COMMUNITY STORIES
        ================================================= */}

        <div className="mt-20">


          {/* Heading */}

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
              Community Stories
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">

              Learn from real experiences.

            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">

              Hear directly from people who have participated in
              our discussions and experienced the journey.

            </p>

          </div>



          {/* =================================================
              VIDEO CARDS
          ================================================= */}

          <div className="mt-10 grid gap-6 md:grid-cols-2">


            {/* =================================================
                ADITYA VIDEO
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >

              <div className="bg-[#102a43]">

                <video
                  src={adityaVideo}
                  controls
                  className="h-[360px] w-full object-cover"
                />

              </div>


              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f5b]">
                  Student Experience
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#102a43]">
                  Aditya's Experience
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                  A real experience from our Group Discussion
                  community.

                </p>

              </div>

            </div>



            {/* =================================================
                FUTURE VIDEO
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-[360px]
                  flex-col
                  items-center
                  justify-center
                  bg-[#102a43]
                  text-white
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
                    bg-[#087f5b]
                  "
                >

                  <FiPlay className="ml-1 text-2xl" />

                </div>

                <p className="mt-5 text-lg font-semibold">
                  More stories coming soon
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Video will be added here
                </p>

              </div>


              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f5b]">
                  Coming Soon
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#102a43]">
                  Community Experience
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                  Another student experience will be added here.

                </p>

              </div>

            </div>

          </div>

        </div>



        {/* =================================================
            FINAL CTA
        ================================================= */}

        

      </div>



      {/* =====================================================
          FULL SCREEN IMAGE MODAL
      ===================================================== */}

      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
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


          {/* CLOSE BUTTON */}

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-2xl
              font-bold
              text-[#102a43]
              shadow-lg
              transition
              hover:bg-[#087f5b]
              hover:text-white
            "
            aria-label="Close image"
          >

            ×

          </button>



          {/* FULL IMAGE */}

          <img
            src={selectedImage}
            alt="Full size Group Discussion"
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

    </section>
  );
}


export default Sessions;