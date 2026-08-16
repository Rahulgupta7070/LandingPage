import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Community from "./components/Community";
import Growth from "./components/Growth";
import Feedback from "./components/Feedback";
import Sessions from "./components/Sessions";
import Topics from "./components/Topics";
import JoinCommunity from "./components/JoinCommunity";
import DSAPractice from "./components/DSAPractice";


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Sessions />

      <JoinCommunity />
    </>
  );
}


/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <BrowserRouter>

      <Routes>


        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />


        {/* ================= COMMUNITY ================= */}

        <Route
          path="/community"
          element={
            <>
              <Navbar />
              <Community />
            </>
          }
        />


        {/* ================= GROWTH ================= */}

        <Route
          path="/growth"
          element={
            <>
              <Navbar />
              <Growth />
            </>
          }
        />


        {/* ================= TOPICS ================= */}

        <Route
          path="/topics"
          element={
            <>
              <Navbar />
              <Topics />
            </>
          }
        />


        {/* ================= FEEDBACK ================= */}

        <Route
          path="/feedback"
          element={
            <>
              <Navbar />
              <Feedback />
            </>
          }
        />


        {/* ================= DSA PRACTICE ================= */}

        <Route
          path="/dsa"
          element={
            <>
              <Navbar />
              <DSAPractice />
            </>
          }
        />
        <Route
  path="/join"
  element={
    <>
      <Navbar />
      <JoinCommunity />
    </>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;