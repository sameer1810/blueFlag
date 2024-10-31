import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent text-white py-16 px-6">
      {/* Heading Section */}
      <div className="text-center mb-12 relative">
        {/* Large background text */}
        <h1 className="text-transparent text-[5rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider stroke-blue-600 font-poppins">
          About Us
        </h1>
      </div>
      
      <section className="bg-transparent text-white py-16 px-4 md:px-8 lg:px-24">
      {/* Heading Section */}
      <div className=" mb-20">
        <h2 className="text-4xl md:text-5xl "> Welcome to <span className='font-bold'>BLUE FLAG !</span> </h2>
      </div> 
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          
          <p className="mb-10 text-lg">
          <span className='font-bold'>BLUE FLAG</span> is founded by three friends with a shared vision and commitment to excellence. We specialize in providing custom design and development solutions, helping businesses establish a strong online presence and achieve their digital goals.

          </p>
          <p className="mb-4 text-2xl font-bold">
          Our Story
          </p>
          <p className="mb-10 text-lg">
          Founded in 2024, Blue Flag emerged from a friendship that began in 2010. Over the years, we’ve built a solid foundation of trust, respect, and collaboration, allowing us to combine our unique skills and expertise. This synergy fuels our creativity and drives us to create exceptional digital experiences tailored to meet the needs of our clients.
          </p>
          <p className="mb-4 text-2xl font-bold">
          Our Mission
          </p>
          <p className=" text-lg">
          At BLUE FLAG, our mission is to empower businesses by delivering innovative solutions that bridge the gap between technology and creativity. We believe that every brand has a story to tell, and we’re here to help you share yours with the world.
          </p>
        </div>

        {/* Image Section for Mobile */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <img 
            src="../../public/images/aboutimage.svg" 
            alt="Co-founders working together" 
            className="rounded-lg object-cover w-full"
          />
        </div>

      </div>
    </section>

      
      <div className="bg-black text-white py-10 flex flex-col items-center justify-center space-y-12 px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-snug md:leading-normal">
            Want a custom solution for your business? <br className="hidden md:block"/> Let’s connect.
        </h2>

        {/* Button */}
        <button onClick={()=>navigate("/contact")}
            className="bg-customPurple  border-2 border-transparent hover:bg-transparent hover:border-white hover:bg-customPurpleDark text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 rounded-lg transition duration-300"
           
        >
            Start a project
        </button>
      </div>

    </div>
  );
};

export default About;
