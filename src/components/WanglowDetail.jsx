// WanglowDetail.js
import React from 'react';

const WanglowDetail = () => {
  return (
    <div className="bg-transparent text-white py-16 px-6">
           <div className="bg-transparent text-center mb-16 relative">
                {/* Large background text */}
                    <h1 className="text-transparent text-[3rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider stroke-blue-600">
                        OUR WORK
                    </h1>
                    <div class="flex items-center justify-center bg-black">
                        <div class="relative text-center">
                            <h1 class="text-4xl md:text-5xl lg:text-8xl  text-white">Youtube Thumbnail</h1>
                            <p class="absolute -right-0.5 md:-right-0.5 top-full text-lg md:text-3xl lg:text-5xl text-customPurple italic mt-1">Re-Design</p>
                        </div>
                    </div>
            </div>

             {/* Before and After Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center text-center mt-24 lg:mt-40 px-16">
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 lg:mb-20">BEFORE</p>
          <img
            src="/images/Thumbnail1.png"
            alt="Before Thumbnail 1"
            className="w-full h-auto object-contain border-4 border-blue-500 rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 lg:mb-20">AFTER</p>
          <img
            src="/images/Thumbnail2.png"
            alt="After Thumbnail 1"
            className="w-full h-auto object-contain border-4 border-yellow-500 rounded-lg"
          />
        </div>

        <div className="space-y-4 md:mt-20">
          <p className="text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 lg:mb-20">BEFORE</p>
          <img
            src="/images/Thumbnail3.png"
            alt="Before Thumbnail 2"
            className="w-full h-auto object-contain border-4 border-blue-500 rounded-lg"
          />
        </div>
        <div className="space-y-4 md:mt-20">
          <p className="text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 lg:mb-20">AFTER</p>
          <img
            src="/images/Thumbnail4.png"
            alt="After Thumbnail 2"
            className="w-full h-auto object-contain border-4 border-yellow-500 rounded-lg"
          />
        </div>
      </div>

      <div className="bg-transparent text-white py-16 flex flex-col items-center justify-center space-y-12 px-4 md:mt-20">
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

export default WanglowDetail;
