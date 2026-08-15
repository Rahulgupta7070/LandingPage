import React from "react";
import {
  FiArrowRight,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";

import whatsappQR from "../assets/whatsapp-qr.png";

function JoinCommunity() {
  return (
    <section
      id="join"
      className="bg-[#f8f7f2] px-6 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            overflow-hidden
            rounded-[2rem]
            bg-[#102a43]
            px-6
            py-10
            sm:px-10
            sm:py-12
            lg:px-14
          "
        >

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#74c69d]">
                Join Our Community
              </p>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                We started with two people.
                <br />

                <span className="text-[#74c69d]">
                  You could be the next one.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Join our WhatsApp community to stay connected with
                upcoming Group Discussions, interview preparation,
                technical topics and placement experiences.
              </p>


              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {/* GD Sessions */}

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-[#74c69d]
                    "
                  >
                    <FiMessageCircle />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Group Discussions
                    </p>

                    <p className="text-xs text-slate-400">
                      Regular interview-style sessions
                    </p>

                  </div>

                </div>


                {/* Community */}

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-[#74c69d]
                    "
                  >
                    <FiUsers />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Growing Community
                    </p>

                    <p className="text-xs text-slate-400">
                      Learn and grow together
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  JOIN BUTTON
              ================================================= */}

              <a
                href="YOUR_TOPMATE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#087f5b]
                  px-7
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
                Join GD
                <FiArrowRight />
              </a>

            </div>


            {/* =================================================
                RIGHT — WHATSAPP QR
            ================================================= */}

            <div className="flex justify-center lg:justify-end">

              <div
                className="
                  rounded-[1.5rem]
                  bg-white
                  p-7
                  text-center
                  shadow-xl
                "
              >

                {/* =================================================
                    WHATSAPP QR IMAGE

                    QR image:
                    src/assets/whatsapp-qr.png
                ================================================= */}

                <img
                  src={whatsappQR}
                  alt="WhatsApp Group QR Code"
                  className="
                    h-64
                    w-64
                    rounded-xl
                    object-contain
                  "
                />


                {/* QR TEXT */}

                <p className="mt-5 text-base font-bold text-[#102a43]">
                  Scan to Join
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Join our WhatsApp Group
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default JoinCommunity;