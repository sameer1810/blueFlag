// WebDesignDetail.js
import React from 'react';

const WebDesignDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
       <div className="bg-transparent text-center mb-16 relative">
                {/* Large background text */}
                    <h1 className="text-transparent text-[3rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider stroke-blue-600">
                        OUR WORK
                    </h1>
                    <h3 class="text-2xl md:text-4xl lg:text-6xl uppercase text-white mb-8 mt-8 lg:mb-24">somsharmaphotography.com</h3>
                    <h3 class="text-3xl md:text-6xl font-semibold italic text-white mb-8">Introduction</h3>
                    <p className=" text-lg md:text-2xl mb-8 lg:mb-24">I designed a clean and user-friendly portfolio website for a photographer. The goal was to ensure easy navigation for users of all ages, including those with minimal technical experience. The website allows visitors to effortlessly view the photographer's portfolio, browse through galleries, and make inquiries. The design focuses on simplicity and accessibility to enhance the overall user experience.</p>
                    <h3 class="text-3xl md:text-6xl font-semibold italic text-white  mt-8 ">Screen Visuals</h3>
                    <div class="flex flex-col space-y-0 p-0 m-0">
    <img src="../../public/images/SomImg1.png" alt="Web Design for Bomchi Cafe" class="w-full h-auto object-cover" />
    <img src="../../public/images/SomImg2.png" alt="Web Design for Bomchi Cafe" class="w-full h-auto object-cover" />
    <img src="../../public/images/SomImg3.png" alt="Web Design for Bomchi Cafe" class="w-full h-auto object-cover" />
</div>


                    <h3 class="text-3xl md:text-6xl font-semibold italic text-white mb-8 mt-8 lg:mb-24">Tech Used</h3>
                    <img src="../../public/images/WorkImg2.svg" alt="Web Design for Bomchi Cafe" className="w-full h-96 object-cover mb-20" />

                    <h3 class="text-3xl md:text-6xl font-semibold italic text-white mb-8">Impact</h3>
                    <p className=" text-lg md:text-2xl mb-8 lg:mb-24">The photographer appreciated the clean design and ease of use, noting that it made showcasing their work to clients much simpler. Early feedback from users highlighted how intuitive the website was to navigate, regardless of their age or tech experience.</p>

                    <div className="bg-transparent text-white py-16 flex flex-col items-center justify-center space-y-12 px-4">
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
      
    </div>
  );
};

export default WebDesignDetail;
