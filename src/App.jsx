// src/App.jsx
import React, { useEffect, Suspense, lazy,useRef } from "react";
import {  HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer";
import "./App.css"; // Add a CSS file for transition animations

// Lazy load the components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Service = lazy(() => import("./components/Service"));
const Work = lazy(() => import("./components/Work"));
const BomchiCafeDetail = lazy(() => import("./components/BomchiCafeDetail"));
const WanglowDetail = lazy(() => import("./components/WanglowDetail"));
const WebDesignDetail = lazy(() => import("./components/WebDesignDetail"));
const Contact = lazy(() => import("./pages/Contact"));

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  // Scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        classNames="fade"
        timeout={300} // Duration of the animation
      >
        <div ref={nodeRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/bomchi-cafe-detail" element={<BomchiCafeDetail />} />
            <Route path="/work/wanglow-detail" element={<WanglowDetail />} />
            <Route path="/work/web-design-detail" element={<WebDesignDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow pt-9">
          <AnimatedRoutes />
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
