// src/App.jsx
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import BomchiCafeDetail from "./components/BomchiCafeDetail";
import WanglowDetail from "./components/WanglowDetail";
import WebDesignDetail from "./components/WebDesignDetail";

import Contact from "./pages/Contact";
import "./App.css";  // Add a CSS file for transition animations
import Service from "./components/Service";
import Work from "./components/Work";
import FooterComponent from "./components/Footer";

function AnimatedRoutes() {
  const location = useLocation();

  // Add this useEffect to scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300} // Define the duration of the animation
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />}/>
          <Route path="/work" element={<Work />} />
          <Route path="/work/bomchi-cafe-detail" element={<BomchiCafeDetail />} />
          <Route path="/work/wanglow-detail" element={<WanglowDetail />} />
          <Route path="/work/web-design-detail" element={<WebDesignDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
        
        <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
