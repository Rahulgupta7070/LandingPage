import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiUsers,
  FiMessageCircle,
  FiSend,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

const API_URL =
  "https://script.google.com/macros/s/AKfycbz_Q8hyrBe5fBdie0pFqFQ8QPCWTCKkPoJGHSwjq6Rj0Kf4XPL8FEKUVKBuT4csfJfamA/exec";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    rating: "5",
    feedback: "",
    batch: "Batch 01",
  });

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingFeedback, setLoadingFeedback] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // GET FEEDBACK FROM GOOGLE SHEET
  // =====================================================

  const fetchFeedbacks = async () => {
    try {
      setLoadingFeedback(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch feedback");
      }

      const data = await response.json();

      console.log("Google Sheet Feedback:", data);

      if (!Array.isArray(data)) {
        setFeedbacks([]);
        return;
      }

      // Only Approved = YES feedback will show
      const approvedFeedback = data.filter((item) => {
        const approved =
          item.Approved ??
          item.approved ??
          "";

        return (
          String(approved).trim().toLowerCase() === "yes"
        );
      });

      setFeedbacks(approvedFeedback);

    } catch (error) {
      console.error("Feedback fetch error:", error);
      setFeedbacks([]);
    } finally {
      setLoadingFeedback(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // RATING
  // =====================================================

  const handleRating = (number) => {
    setFormData((previous) => ({
      ...previous,
      rating: String(number),
    }));
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.topic.trim()) {
      setError("Please enter the discussion topic.");
      return;
    }

    if (!formData.feedback.trim()) {
      setError("Please enter your feedback.");
      return;
    }

    try {
      setLoading(true);

      const data = new URLSearchParams();

      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("topic", formData.topic.trim());
      data.append("rating", formData.rating);
      data.append("feedback", formData.feedback.trim());
      data.append("batch", formData.batch);
      data.append(
        "date",
        new Date().toLocaleDateString("en-IN")
      );

      // New feedback first needs approval
      data.append("approved", "NO");

      await fetch(API_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setSuccess(true);
      setError("");

      setFormData({
        name: "",
        email: "",
        topic: "",
        rating: "5",
        feedback: "",
        batch: "Batch 01",
      });

    } catch (error) {
      console.error("Submit error:", error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f7f2]">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
            Sessions & Feedback
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#102a43] sm:text-5xl">
            Real discussions.
            <br />

            <span className="text-slate-400">
              Real experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Our Group Discussion sessions are designed like real
            interview discussions where students learn,
            participate and improve together.
          </p>

        </div>


        {/* =====================================================
            SESSION INFO
        ====================================================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-3">

          {/* Students */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#087f5b]/10 text-[#087f5b]">
              <FiUsers />
            </div>

            <h3 className="mt-5 font-bold text-[#102a43]">
              10–15 Students
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Small batches so everyone gets a chance to participate.
            </p>

          </div>


          {/* Interview */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#087f5b]/10 text-[#087f5b]">
              <FiMessageCircle />
            </div>

            <h3 className="mt-5 font-bold text-[#102a43]">
              Interview Style
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Questions, answers and cross-questioning like an interview.
            </p>

          </div>


          {/* Sunday */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#087f5b]/10 text-[#087f5b]">
              <FiCalendar />
            </div>

            <h3 className="mt-5 font-bold text-[#102a43]">
              Sunday Special
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Learn from placed students and experienced professionals.
            </p>

          </div>

        </div>


        {/* =====================================================
            FEEDBACK + FORM
        ====================================================== */}

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">


          {/* =================================================
              LEFT — FEEDBACK CARDS
          ================================================= */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
              Student Feedback
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102a43]">
              What students say.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Real feedback from students who have participated
              in our Group Discussion sessions.
            </p>


            {/* Loading */}

            {loadingFeedback && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
                Loading feedback...
              </div>
            )}


            {/* No feedback */}

            {!loadingFeedback && feedbacks.length === 0 && (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">

                <FiMessageCircle className="mx-auto text-3xl text-slate-300" />

                <p className="mt-4 font-semibold text-[#102a43]">
                  No feedback published yet.
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Be the first student to share your experience.
                </p>

              </div>
            )}


            {/* Feedback Cards */}

            {!loadingFeedback && feedbacks.length > 0 && (

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {feedbacks.map((item, index) => {

                  const name =
                    item.Name ||
                    item.name ||
                    "Student";

                  const feedback =
                    item.Feedback ||
                    item.feedback ||
                    "";

                  return (

                    <div
                      key={index}
                      className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                      {/* ================================
                          STUDENT HEADER
                      ================================= */}

                      <div className="flex items-center gap-4">

                        {/* IMAGE — BAAD ME YAHAN IMAGE LAGA DENA */}

                        {/*
                        <img
                          src={item.Image}
                          alt={name}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                        */}


                        {/* Temporary Avatar */}

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#102a43] text-lg font-bold text-white">
                          {String(name)
                            .charAt(0)
                            .toUpperCase()}
                        </div>


                        <div>

                          <h3 className="font-bold text-[#102a43]">
                            {name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-400">
                            GD Community
                          </p>

                        </div>

                      </div>


                      {/* ================================
                          MESSAGE
                      ================================= */}

                      <div className="mt-5">

                        <FiMessageCircle className="text-xl text-[#087f5b]" />

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          "{feedback}"
                        </p>

                      </div>


                      {/* ================================
                          BOTTOM
                      ================================= */}

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                        <div className="flex gap-1 text-[#087f5b]">

                          {[1, 2, 3, 4, 5].map((star) => (
                            <FiStar
                              key={star}
                              className="fill-current text-xs"
                            />
                          ))}

                        </div>

                        <FiCheckCircle className="text-[#087f5b]" />

                      </div>

                    </div>

                  );

                })}

              </div>

            )}

          </div>


          {/* =================================================
              RIGHT — FEEDBACK FORM
          ================================================= */}

          <div className="sticky top-24 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#087f5b]">
              Share Your Experience
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#102a43]">
              How was your session?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your message may be featured on our community page
              after approval.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >

              {/* Name */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#102a43]">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-[#f8f7f2] px-4 py-3 text-sm outline-none transition focus:border-[#087f5b]"
                />

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#102a43]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-slate-200 bg-[#f8f7f2] px-4 py-3 text-sm outline-none transition focus:border-[#087f5b]"
                />

              </div>


              {/* Topic + Batch */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#102a43]">
                    Topic
                  </label>

                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Core Java"
                    className="w-full rounded-xl border border-slate-200 bg-[#f8f7f2] px-4 py-3 text-sm outline-none focus:border-[#087f5b]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#102a43]">
                    Batch
                  </label>

                  <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-[#f8f7f2] px-4 py-3 text-sm outline-none focus:border-[#087f5b]"
                  >
                    <option>Batch 01</option>
                    <option>Batch 02</option>
                    <option>Batch 03</option>
                    <option>Batch 04</option>
                  </select>

                </div>

              </div>


              {/* Rating */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#102a43]">
                  Rating
                </label>

                <div className="flex gap-2">

                  {[1, 2, 3, 4, 5].map((number) => (

                    <button
                      key={number}
                      type="button"
                      onClick={() => handleRating(number)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                        Number(formData.rating) >= number
                          ? "border-[#087f5b] bg-[#087f5b] text-white"
                          : "border-slate-200 bg-white text-slate-400"
                      }`}
                    >
                      <FiStar className="text-xs" />
                    </button>

                  ))}

                </div>

              </div>


              {/* Feedback */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#102a43]">
                  Your Message
                </label>

                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your experience..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8f7f2] px-4 py-3 text-sm outline-none transition focus:border-[#087f5b]"
                />

              </div>


              {/* Error */}

              {error && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}


              {/* Success */}

              {success && (
                <div className="flex gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">

                  <FiCheckCircle className="mt-0.5 shrink-0" />

                  <span>
                    Feedback submitted successfully.
                    It will appear after approval.
                  </span>

                </div>
              )}


              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#102a43] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#087f5b] disabled:opacity-60"
              >

                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    <FiSend />
                    Send Feedback
                  </>
                )}

              </button>

            </form>

          </div>

        </div>


        {/* =====================================================
            SESSION MESSAGE
        ====================================================== */}

        <div className="mt-16 rounded-[2rem] bg-[#102a43] p-8 text-center sm:p-10">

          <FiMessageCircle className="mx-auto text-3xl text-[#74c69d]" />

          <h2 className="mt-4 text-2xl font-bold text-white">
            Your experience can help someone else.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Share what you learned from the discussion so that
            another student can get motivated and take the next step.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Feedback;