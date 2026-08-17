import React from "react";

import {
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiMonitor,
} from "react-icons/fi";


function Topics() {

  const categories = [
    {
      title: "Core Java",
      icon: <FiCode />,
      topics: [
        "Basic Java , OOPS",
        "Java Exception Handling",
        "Collection Framework",
        "Multithreading",
        "File Management",
      ],
    },

    {
      title: "Database",
      icon: <FiDatabase />,
      topics: [
        "SQL",
        "JDBC",
        "JSP",
      ],
    },

    {
      title: "Spring Ecosystem",
      icon: <FiBookOpen />,
      topics: [
        "Spring Boot",
        "Hibernate",
        "JPA",
        "Spring Security",
      ],
    },

    {
      title: "Frontend",
      icon: <FiMonitor />,
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },

    {
      title: "Development Tools",
      icon: <FiGitBranch />,
      topics: [
        "Git",
        "GitHub",
      ],
    },
  ];


  return (

    <section
      id="topics"
      className="
        min-h-screen
        bg-[#f8f7f2]
        px-6
        py-20

        dark:bg-[#0f172a]

        sm:px-8
        lg:px-10
      "
    >

      <div className="mx-auto max-w-7xl">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-3xl">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#087f5b]
              dark:text-[#74c69d]
            "
          >
            GD Topics
          </p>


          <h1
            className="
              mt-4
              text-4xl
              font-bold
              text-[#102a43]

              dark:text-white

              sm:text-5xl
            "
          >
            What we discuss.
          </h1>


          <p
            className="
              mt-5
              text-base
              leading-8
              text-slate-600

              dark:text-slate-300

              sm:text-lg
            "
          >
            Our Group Discussions focus on practical technical topics
            that help students prepare for interviews and improve their
            understanding through discussion.
          </p>

        </div>



        {/* =====================================================
            TOPICS
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {categories.map((category) => (

            <div
              key={category.title}
              className="
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white
                p-7

                dark:border-slate-700
                dark:bg-[#1e293b]

                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >


              {/* =================================================
                  CATEGORY
              ================================================= */}

              <div className="flex items-center gap-4">

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

                    dark:bg-[#74c69d]/10
                    dark:text-[#74c69d]
                  "
                >
                  {category.icon}
                </div>


                <h2
                  className="
                    text-xl
                    font-bold
                    text-[#102a43]

                    dark:text-white
                  "
                >
                  {category.title}
                </h2>

              </div>



              {/* =================================================
                  TOPIC LIST
              ================================================= */}

              <div className="mt-6 space-y-3">

                {category.topics.map((topic, index) => (

                  <div
                    key={topic}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-[#f8f7f2]
                      px-4
                      py-3

                      dark:bg-[#0f172a]
                    "
                  >


                    {/* NUMBER */}

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#102a43]
                        text-xs
                        font-semibold
                        text-white

                        dark:bg-[#1e3a5f]
                        dark:text-slate-100
                      "
                    >
                      {index + 1}
                    </span>


                    {/* TOPIC NAME */}

                    <span
                      className="
                        text-sm
                        font-medium
                        text-slate-700

                        dark:text-slate-200
                      "
                    >
                      {topic}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>



        {/* =====================================================
            BOTTOM PRACTICE SECTION
        ===================================================== */}

        <div
          className="
            mt-12
            rounded-[1.5rem]
            bg-[#102a43]
            p-8
            text-white

            dark:bg-[#1e293b]

            sm:p-10
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >


            {/* CONTENT */}

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  text-[#74c69d]
                "
              >
                PRACTICE TOGETHER
              </p>


              <h2
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Don't just learn the topic.
                <br className="hidden sm:block" />
                Discuss it.
              </h2>


              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                Every topic is discussed like an interview so that
                students learn how to explain their knowledge clearly.
              </p>

            </div>



            {/* JOIN SESSION BUTTON */}

            <a
              href="#sessions"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#087f5b]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition

                hover:bg-white
                hover:text-[#102a43]

                dark:hover:bg-[#f8fafc]
                dark:hover:text-[#102a43]
              "
            >
              Join a Session
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Topics;