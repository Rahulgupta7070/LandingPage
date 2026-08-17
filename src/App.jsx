import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Community from "./components/Community";
import Growth from "./components/Growth";
import Feedback from "./components/Feedback";
import Sessions from "./components/Sessions";
import Topics from "./components/Topics";
import JoinCommunity from "./components/JoinCommunity";
import DSAPractice from "./components/DSAPractice";
import ScrollToTop from "./components/ScrollToTop";


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <>
      <Hero />

      <Sessions />

      <JoinCommunity />
    </>
  );
}


/* =====================================================
   COMMON LAYOUT
===================================================== */

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= PAGE CONTENT ================= */}

      <main className="flex-1">
        {children}
      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}


/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <BrowserRouter>

      {/* Scroll page to top when route changes */}
      <ScrollToTop />

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />


        {/* ================= COMMUNITY ================= */}

        <Route
          path="/community"
          element={
            <Layout>
              <Community />
            </Layout>
          }
        />


        {/* ================= GROWTH ================= */}

        <Route
          path="/growth"
          element={
            <Layout>
              <Growth />
            </Layout>
          }
        />


        {/* ================= TOPICS ================= */}

        <Route
          path="/topics"
          element={
            <Layout>
              <Topics />
            </Layout>
          }
        />


        {/* ================= FEEDBACK ================= */}

        <Route
          path="/feedback"
          element={
            <Layout>
              <Feedback />
            </Layout>
          }
        />


        {/* ================= DSA PRACTICE ================= */}

        <Route
          path="/dsa"
          element={
            <Layout>
              <DSAPractice />
            </Layout>
          }
        />


        {/* ================= JOIN COMMUNITY ================= */}

        <Route
          path="/join"
          element={
            <Layout>
              <JoinCommunity />
            </Layout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;