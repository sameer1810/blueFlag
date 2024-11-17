import React from 'react';
import { FaSearch, FaDraftingCompass, FaPencilRuler, FaShoppingCart,FaFont, FaBlogger, FaFileCode,FaYoutube,FaBoxOpen } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent text-white py-16 px-6">
      {/* Heading Section */}
      <div className="text-center mb-16 relative">
        {/* Large background text */}
        <h1 className="text-transparent text-[4rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider font-poppins">
          Services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
          Excellence in Every Service
        </p>
      </div>

      {/* Row 1: Heading, Image, and Content */}  
<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
  {/* Heading */}
  <h3 className="text-5xl font-semibold mb-8 lg:col-span-2 text-center ">
    WEB DESIGN <span className="text-customPurple">01</span>
  </h3>
  
  
  {/* Content on the left */}
  <div className="order-3 lg:order-none flex-1 ">
    <ul className="space-y-10 mt-3">
      <li className="flex items-start space-x-4">
        <FaSearch className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">UX Research</h4>
          <p className="text-gray-400 text-xl">
            UX Research involves gathering and analyzing user insights to refine the design and development of user-centric products and experiences.
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <FaDraftingCompass className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Prototype</h4>
          <p className="text-gray-400 text-xl">
            Prototypes are interactive versions of a product designed to test UX ideas and ensure usability.
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <FaPencilRuler className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Interaction Design</h4>
          <p className="text-gray-400 text-xl">
            Interaction Design focuses on creating intuitive and engaging experiences between users and digital interfaces.
          </p>
        </div>
      </li>
    </ul>
  </div>

  {/* Image on the right*/}
  <div className="order-2 lg:order-none w-full lg:w-[450px] lg:h-[500px] mx-auto aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg ">
    <img
      src="../../public/images/ServiceImg1.png.png"
      alt="Web Design"
      className="w-full h-full object-cover"
    />
  </div>
</div>

{/* Row 2: Heading, Image, and Content */}  
<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
  {/* Heading */}
  <h3 className="text-5xl font-semibold mb-8 lg:col-span-2 text-center">
    WEB DEVELOPMENT <span className="text-customPurple">02</span>
  </h3>
  
  {/* Image on the left */}
  <div className="order-2 lg:order-none w-full lg:w-[450px] lg:h-[500px] mx-auto aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
    <img
      src="../../public/images/ServiceImg2.png.png"
      alt="Web Development"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content on the right */}
  <div className="order-3 lg:order-none flex-1">
    <ul className="space-y-10 mt-3">
      <li className="flex items-start space-x-4">
        <FaShoppingCart className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">E-Commerce Website</h4>
          <p className="text-gray-400 text-xl">
            E-Commerce websites involve online buying and selling, providing seamless client access and a secure shopping experience.
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <FaBlogger className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Blog Website</h4>
          <p className="text-gray-400 text-xl">
            Blog websites serve as a platform for individuals or organizations to share thoughts, insights, and expertise with their audience.
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <FaFileCode className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Portfolio Website</h4>
          <p className="text-gray-400 text-xl">
            Portfolio websites showcase a company's products and services, helping to attract clients and market offerings.
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

{/* Row 3: Heading, Image, and Content */}  
<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
  {/* Heading */}
  <h3 className="text-5xl font-semibold mb-8 lg:col-span-2 text-center">
    GRAPHIC DESIGN <span className="text-customPurple">03</span>
  </h3>
  

  {/* Content */}
  <div className="order-3 lg:order-none flex-1 ">
    <ul className="space-y-10 mt-3">
      <li className="flex items-start space-x-4">
        <FaFont className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Logo Design</h4>
          <p className="text-gray-400 text-xl">
            Logo design is the art of crafting a visually captivating symbol that represents a brand's identity and values.
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <FaYoutube className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">YouTube Thumbnails</h4>
          <p className="text-gray-400 text-xl">
            Engaging YouTube thumbnails capture attention, boost views, and make your content more clickable.
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <FaBoxOpen className="text-5xl text-white" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Branding</h4>
          <p className="text-gray-400 text-xl">
          Branding creates a unique identity that connects with consumers, helping you stand out and build lasting relationships.
          </p>
        </div>
      </li>
    </ul>
  </div>

  {/* Image */}
  <div className="order-2 lg:order-none w-full lg:w-[450px] lg:h-[500px] mx-auto aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
    <img
      src="../../public/images/ServiceImg3.png.png"
      alt="Graphic Design"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    
      <div className="bg-black text-white py-10 flex flex-col items-center justify-center space-y-12 px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-snug md:leading-normal">
            Want a custom solution for your business? <br className="hidden md:block"/> Let’s connect.
        </h2>

        {/* Button */}
        <button
            className="bg-customPurple  border-2 border-transparent hover:bg-transparent hover:border-white hover:bg-customPurpleDark text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 rounded-lg transition duration-300"
            onClick={()=>navigate("/contact")}
        >
            Start a project
        </button>
        </div>
        
    </div>
  );
};

export default Service;
