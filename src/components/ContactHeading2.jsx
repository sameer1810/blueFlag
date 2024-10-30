import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';  // Import icons from react-icons

const ContactHeading2 = () => {
  return (
    <div className="relative text-center py-12">
      {/* Large outlined text as one phrase */}
      <h1 className="text-transparent text-[3.5rem] sm:text-[6rem] md:text-[3rem] lg:text-[10rem] leading-none font-extrabold tracking-wider stroke-text uppercase stroke-pink-500">
        Our Contact
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
        We would love to hear from you
      </p>

      {/* Contact Section */}
      <div className="relative bg-gradient-to-r from-customPurple via-customPurple to-customPurple text-white p-6 mt-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4f3b7a,_#2e1a47)] opacity-800"></div> {/* Radial Gradient Effect */}
        <div className="relative max-w-screen-xl mx-auto flex justify-between items-center">
          {/* WhatsApp Contact */}
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-3xl" /> {/* WhatsApp Icon */}
            <span className="text-lg font-semibold">9998882220</span>
          </div>

          {/* Email Contact */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl" /> {/* Email Icon */}
            <span className="text-lg font-semibold">heisenberg@example.com</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactHeading2;
