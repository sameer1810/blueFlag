import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close
import FooterComponent from "./Footer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleFooter(); // Call the toggle footer function
  };

  // Effect to manage body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'unset'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isOpen]);


  return (
    <nav className="bg-transparent text-white py-4 fixed top-0 left-0 w-full shadow-md z-10 backdrop-blur-3xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-3xl font-bold text-customPurple">
          BLUE <span className="text-white font-bold">FLAG</span>
        </Link>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-customPurple">Home</Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-customPurple">Service</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-customPurple">Contact</Link>
          </li>
          <li>
            <Link to="/work" className="hover:text-customPurple"> Our Work</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-customPurple">About Us</Link>
          </li>
        </ul>

        {/* Mobile Menu (Visible when clicked) */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-pink-gradient h-screen text-center space-y-4 py-4 `}
        >
          <li className="border-t border-b border-gray-700 pt-4 pb-4">
            <Link to="/" className="hover:text-customPurple" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="border-b border-gray-700 pb-4">
            <Link to="/service" className="hover:text-customPurple" onClick={toggleMenu}>Service</Link>
          </li>
          <li className="border-b border-gray-700 pb-4">
            <Link to="/contact" className="hover:text-customPurple" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="border-b border-gray-700 pb-4">
            <Link to="/work" className="hover:text-customPurple" onClick={toggleMenu}>Portfolio</Link>
          </li>
          <li className="border-b border-gray-700 pb-4">
            <Link to="/about" className="hover:text-customPurple" onClick={toggleMenu}>About Us</Link>
          </li>

      
      
        </ul>
        
      </div>
         

      
    </nav>
  );
}

export default Navbar;
