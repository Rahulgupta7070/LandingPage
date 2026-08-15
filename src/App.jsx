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

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sessions/>
      <JoinCommunity/>
    </> 
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              
            </>
          }
        />

        <Route
          path="/community"
          element={
            <>
              <Navbar />
              <Community />
            </>
          }
        />

        <Route
  path="/feedback"
  element={
    <>
      <Navbar />
      <Feedback />
    </>
  }
/>

        <Route
  path="/growth"
  element={
    <>
      <Navbar />
      <Growth />
    </>
  }
/>

<Route
  path="/topics"
  element={
    <>
      <Navbar />
      <Topics />
    </>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;