import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import CursorGlow from "./components/CursorGlow/CursorGlow";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import AuroraBackground from "./components/AuroraBackground/AuroraBackground";

import PreLoader from "./components/PreLoader/Preloader";
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  // Full screen PreLoader
  const [preLoading, setPreLoading] = useState(true);

  // Small route Loader
  const [routeLoading, setRouteLoading] = useState(false);

  const firstRender = useRef(true);

  /* =================================
     FIRST WEBSITE LOAD
  ================================= */

  useEffect(() => {
    // PreLoader only on first load / refresh
    const timer = setTimeout(() => {
      setPreLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /* =================================
     ROUTE CHANGE LOADER
  ================================= */

  useEffect(() => {
    // First render ko ignore karo
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Navbar link click
    setRouteLoading(true);

    // Page top
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  /* =================================
     FULL SCREEN PRELOADER
  ================================= */

  if (preLoading) {
    return <PreLoader finish={() => setPreLoading(false)} />;
  }

  return (
    <>
      <AuroraBackground />
      <CursorGlow />
      <ScrollProgress />

      <Navbar />

      {/* =================================
          ROUTE CHANGE LOADER
      ================================= */}

      {routeLoading && (
        <div className="route-loader">
          <Loader size="md" text="Loading..." fullScreen />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
