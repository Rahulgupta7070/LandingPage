import React from "react";
import {
  FiArrowUpRight,
  FiMessageCircle,
  FiUsers,
  FiCalendar,
  FiCheck,
} from "react-icons/fi";

function Community() {
  const topics = [
    "Core Java",
    "Exception Handling",
    "Collection Framework",
    "Multithreading",
    "File Management",
    "SQL",
    "JDBC",
    "JSP",
    "Spring Boot",
    "Hibernate",
    "Spring Security",
    "Git & GitHub",
  ];

  return (
    <section className="bg-[#f8f7f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
            GD Community
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-5xl lg:text-6xl">
            Learn together.
            <br />
            <span className="text-slate-400">
              Prepare together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            This is a technical Group Discussion community where we
            prepare for interviews through regular discussions,
            questions, cross-questioning and real interview-style
            conversations.
          </p>

        </div>


        {/* =====================================================
            DAILY DISCUSSION
        ====================================================== */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">

          {/* Main Content */}

          <div className="rounded-[2rem] bg-[#102a43] p-8 text-white sm:p-10">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#74c69d]">
                  Daily Discussion
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Practice like a real interview.
                </h2>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 sm:flex">
                <FiMessageCircle className="text-xl text-[#74c69d]" />
              </div>

            </div>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Every day, Rahul and Prasant conduct a group discussion
              where participants prepare technical topics in an
              interview-style environment.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              We don't just discuss questions. We ask follow-up
              questions, cross-question each other and try to understand
              how the same topic can be asked in a real interview.
            </p>


            {/* Discussion Flow */}

            <div className="mt-8 border-t border-white/10 pt-7">

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Discussion Flow
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">

                {[
                  "Topic",
                  "Discussion",
                  "Questions",
                  "Cross Questions",
                  "Feedback",
                ].map((item, index) => (
                  <React.Fragment key={item}>

                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                      {item}
                    </span>

                    {index < 4 && (
                      <span className="text-slate-500">
                        →
                      </span>
                    )}

                  </React.Fragment>
                ))}

              </div>

            </div>

          </div>


          {/* Team */}

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
              Community Leads
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#102a43]">
              Learn with Rahul & Prasant
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We conduct the regular discussions, help participants
              understand technical concepts and create an environment
              where everyone gets a chance to participate.
            </p>


            {/* People */}

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl bg-[#f8f7f2] p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#102a43] text-sm font-bold text-white">
                  RK
                </div>

                <div>
                  <p className="font-semibold text-[#102a43]">
                    Rahul Kumar
                  </p>

                  <p className="text-xs text-slate-500">
                    Java Developer
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-4 rounded-2xl bg-[#f8f7f2] p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#087f5b] text-sm font-bold text-white">
                  P
                </div>

                <div>
                  <p className="font-semibold text-[#102a43]">
                    Prasant
                  </p>

                  <p className="text-xs text-slate-500">
                    Community Lead
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            TECHNICAL TOPICS
        ====================================================== */}

        <div className="mt-20 border-t border-slate-200 pt-16">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Heading */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
                What We Prepare
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
                Technical topics
                <br />
                for interviews.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-slate-600">
                Our discussions cover important technologies and
                concepts that are commonly required for Java
                development and technical interviews.
              </p>

            </div>


            {/* Topics */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {topics.map((topic, index) => (
                <div
                  key={topic}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#087f5b]/30 hover:shadow-md"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <FiCheck className="text-sm text-[#087f5b]" />

                  </div>

                  <p className="mt-4 text-sm font-semibold text-[#102a43]">
                    {topic}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            SUNDAY SPECIAL
        ====================================================== */}

        <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#087f5b]">

          <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                  <FiCalendar />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                  Sunday Special
                </p>

              </div>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Learn from people who have already done it.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/80">
                Every Sunday, we invite people who are already placed
                or professionals from our network to join the discussion
                and share their real experiences with the community.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-white/80">
                They talk about their interview experiences, preparation
                strategies, mistakes, challenges and the journey that
                helped them reach where they are today.
              </p>

            </div>


            {/* Sunday Card */}

            <div className="rounded-3xl bg-white p-6 lg:w-72">

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Every Sunday
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#102a43]">
                Real Experience
              </h3>

              <div className="mt-5 space-y-3">

                {[
                  "Placement Journey",
                  "Interview Experience",
                  "Preparation Tips",
                  "Career Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <FiCheck className="text-sm text-[#087f5b]" />

                    <span className="text-sm text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            GROWTH
        ====================================================== */}

        <div className="mt-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
              From learning to interview ready.
            </h2>

          </div>


          <div className="mx-auto mt-10 max-w-5xl">

            <div className="grid gap-4 sm:grid-cols-5">

              {[
                {
                  number: "01",
                  title: "Learn",
                },
                {
                  number: "02",
                  title: "Practice",
                },
                {
                  number: "03",
                  title: "Discuss",
                },
                {
                  number: "04",
                  title: "Get Feedback",
                },
                {
                  number: "05",
                  title: "Improve",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
                >

                  <p className="text-xs font-bold text-[#087f5b]">
                    {step.number}
                  </p>

                  <p className="mt-3 text-sm font-bold text-[#102a43]">
                    {step.title}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <div className="mt-20 border-t border-slate-200 pt-16 text-center">

          <div className="mx-auto max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
              Ready to Start?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl">
              Let's learn and grow together.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Join the discussion, prepare for your interviews and
              learn directly from real experiences.
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

      </div>
    </section>
  );
}

export default Community;