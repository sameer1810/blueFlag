import React from 'react';
import SwiperComponent from './SwiperComponent';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {

  const navigate = useNavigate();
  return (
    <section className="bg-transparent text-white py-10 px-8 lg:px-24">
  <div className="max-w-7xl mx-auto lg:my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Right Section (Swiper) - Shown first on mobile */}
    <div className="order-1 lg:order-2">
      <SwiperComponent />
    </div>

    {/* Left Section - Centered text on mobile */}
    <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
      <h1 className="text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold leading-tight mb-8">
        A custom solution for <br />
        <span className=" text-center text-[3rem] md:text-[4rem] lg:text-[4rem] uppercase font-bold  text-customPurple font-poppins">
          YOUR BUSINESS
        </span>
      </h1>
      <p className="mb-10 text-lg md:text-2xl md:mb-32">
        Blue Flag is the only place you need to increase your online presence.
      </p>
      <button onClick={()=>navigate("/contact")} className="w-56 sm:w-56 bg-customPurple border-2 border-transparent hover:border-white text-white text-lg px-4 py-4 rounded-lg hover:bg-transparent transition duration-200">
        Start a project
      </button>
    </div>
  </div>
</section>



  );
};

export default HomeSection;
