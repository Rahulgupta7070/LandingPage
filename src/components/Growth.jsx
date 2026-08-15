import React from "react";
import {
  FiBookOpen,
  FiEdit3,
  FiMessageCircle,
  FiUsers,
  FiTrendingUp,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";

function Growth() {
  const steps = [
    {
      number: "01",
      icon: FiBookOpen,
      title: "Learn",
      description:
        "Understand the concepts and prepare important technical topics before joining the discussion.",
    },
    {
      number: "02",
      icon: FiEdit3,
      title: "Practice",
      description:
        "Revise questions, prepare your own answers and practice explaining concepts in simple words.",
    },
    {
      number: "03",
      icon: FiMessageCircle,
      title: "Discuss",
      description:
        "Join the daily group discussion and answer questions like you would in a real interview.",
    },
    {
      number: "04",
      icon: FiUsers,
      title: "Get Feedback",
      description:
        "Listen to other participants, identify mistakes and get useful feedback from the discussion.",
    },
    {
      number: "05",
      icon: FiTrendingUp,
      title: "Improve",
      description:
        "Work on your weak areas and become more confident with every discussion.",
    },
  ];

  const improvements = [
    "Technical knowledge",
    "Communication skills",
    "Confidence",
    "Problem solving",
    "Interview answering",
    "Quick thinking",
  ];

  return (
    <section className="bg-[#f8f7f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
            How We Grow
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-5xl lg:text-6xl">
            From learning
            <br />
            <span className="text-slate-400">
              to interview ready.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Growth happens through regular practice. Our approach is
            simple — learn the concept, practice it, discuss it,
            take feedback and improve.
          </p>

        </div>


        {/* ================= JOURNEY ================= */}

        <div className="mt-16">

          <div className="grid gap-4 md:grid-cols-5">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Number */}

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold text-[#087f5b]">
                      {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#087f5b]/10 text-[#087f5b]">
                      <Icon />
                    </div>

                  </div>


                  {/* Content */}

                  <h2 className="mt-6 text-xl font-bold text-[#102a43]">
                    {step.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>


        {/* ================= SIMPLE FLOW ================= */}

        <div className="mt-16 rounded-[2rem] bg-[#102a43] p-8 sm:p-10">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="max-w-md">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#74c69d]">
                The Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Every discussion should make you better.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                We focus on consistency instead of perfection.
                You don't need to know everything before joining.
                You just need to be willing to learn and participate.
              </p>

            </div>


            {/* Flow */}

            <div className="flex flex-wrap items-center justify-center gap-2">

              {[
                "Learn",
                "Practice",
                "Discuss",
                "Feedback",
                "Improve",
              ].map((item, index) => (
                <React.Fragment key={item}>

                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white">
                    {item}
                  </div>

                  {index < 4 && (
                    <span className="hidden text-[#74c69d] sm:block">
                      →
                    </span>
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>

        </div>


        {/* ================= WHAT YOU IMPROVE ================= */}

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
              What You Build
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
              Skills that stay
              <br />
              with you.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              The goal is not only to answer one interview question.
              We want you to develop skills that help throughout
              your professional journey.
            </p>

          </div>


          {/* Right */}

          <div className="grid gap-3 sm:grid-cols-2">

            {improvements.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#087f5b]/10 text-[#087f5b]">
                  <FiCheck />
                </div>

                <span className="text-sm font-semibold text-[#102a43]">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* ================= INTERVIEW READY ================= */}

        <div className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
                The Goal
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
                Become interview ready.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Regular discussions help you become comfortable with
                technical questions, follow-up questions and explaining
                your thoughts under pressure.
              </p>

              <a
                href="/community"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#087f5b] transition hover:text-[#102a43]"
              >
                See our community
                <FiArrowUpRight />
              </a>

            </div>


            {/* Right Highlight */}

            <div className="rounded-3xl bg-[#f8f7f2] p-7">

              <div className="space-y-5">

                <div className="flex items-start gap-4">

                  <span className="text-lg font-bold text-[#087f5b]">
                    01
                  </span>

                  <div>
                    <h3 className="font-bold text-[#102a43]">
                      Understand
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Build strong fundamentals.
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <span className="text-lg font-bold text-[#087f5b]">
                    02
                  </span>

                  <div>
                    <h3 className="font-bold text-[#102a43]">
                      Explain
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Learn to explain concepts clearly.
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <span className="text-lg font-bold text-[#087f5b]">
                    03
                  </span>

                  <div>
                    <h3 className="font-bold text-[#102a43]">
                      Answer
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Handle questions with confidence.
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <span className="text-lg font-bold text-[#087f5b]">
                    04
                  </span>

                  <div>
                    <h3 className="font-bold text-[#102a43]">
                      Improve
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Learn from every discussion.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= CTA ================= */}

        <div className="mt-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
            Your next step
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
            Start learning with us.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Join the daily discussions, practice technical questions
            and take one step closer to your placement goal.
          </p>

          <a
            href="YOUR_TOPMATE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#102a43] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#087f5b]"
          >
            Join Our GD
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Growth;