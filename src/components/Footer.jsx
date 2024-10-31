import React from 'react';

const FooterComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    })
  }
  return (
    <footer className="relative bg-black text-white py-12">
      <div className="border-t border-gray-700 mb-8"></div>

      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center opacity-40 z-0" style={{ top: '100px' }}>
        <h1 className="text-transparent text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] xl:text-[12rem] leading-none font-extrabold tracking-widest stroke-text uppercase stroke-pink-500 font-poppins">
          BLUE FLAG
        </h1>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Company Name */}
        <span className="text-2xl md:text-3xl font-bold text-customPurple mb-6 md:mb-0">
          BLUE <span className="text-white font-medium">FLAG</span>
        </span>

        {/* Social Media Icons */}
        <div className="flex space-x-8 sm:space-x-10 md:space-x-12 lg:space-x-20 text-2xl sm:text-3xl">  {/* Responsive spacing and icon size */}
          <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-pink-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Scroll to Top and Made in India */}
      <div className="relative z-10 container mx-auto px-4 mt-10 md:mt-20 flex flex-col items-center" style={{ top: '45px' }}>
        <a href="#" className="text-white hover:text-indigo-500 mb-4"
        
        onClick={(e) => {
          e.preventDefault(); // Prevents the default anchor behavior
          handleScrollToTop();
        }}
        >
          <i className="fas fa-arrow-up text-xl sm:text-2xl"></i>  {/* Responsive icon size */}
        </a>
        <span className="text-xs sm:text-sm">MADE IN INDIA</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
