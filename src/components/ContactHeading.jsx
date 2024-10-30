import React from 'react';

const ContactHeading = () => {
  return (
    <div className="relative text-center py-12">
      {/* Large outlined text */}
      <h1 className="text-transparent text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none font-extrabold tracking-wider stroke-text uppercase font-poppins">
        Contact
      </h1>

      {/* Overlay smaller bold text with partial underline, centered vertically */}
      {/* <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Get In 
        <span className="relative inline-block">
          Touch
          
          <span className="absolute left-[2%] bottom-[-6px] w-[98%] h-[2px] bg-white"></span>
        </span>
      </h2> */}

      {/* Subtitle */}
      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
        Drop a message. Our team will get back to you within 12 hours.
      </p>
    </div>
  );
};

export default ContactHeading;
