// BomchiCafeDetail.js
import React from 'react';

const BomchiCafeDetail = () => {
  return (
    <div className="bg-transparent text-white py-16 px-6">
           <div className="bg-transparent text-center mb-16 relative">
                {/* Large background text */}
                    <h1 className="text-transparent text-[3rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider stroke-blue-600">
                        OUR WORK
                    </h1>
                    <div class="flex items-center justify-center bg-black">
                        <div class="relative text-center">
                            <h1 class="text-4xl md:text-5xl lg:text-8xl  text-white">Bomchi Cafe</h1>
                            <p class="absolute -right-0.5 md:-right-0.5 top-full text-lg md:text-3xl lg:text-5xl text-customPurple italic mt-1">Branding</p>
                        </div>
                    </div>
            </div>
      
    
    
    <div className="container mx-auto p-4 grid gap-4">
            {/* Row 1 */}
            <div className="col-span-full">
                <img src="../../public/images/Group 1000001771.svg" alt="Image 1" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 2 */}
            <div className="grid">
                <img src="../../public/images/WorkImg1.svg" alt="Image 2" className="w-full h-auto object-cover  " />
                <img src="../../public/images/WorkImg1.svg" alt="Image 3" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-4">
                <img src="../../public/images/WorkImg1.svg" alt="Image 4" className="w-full h-auto object-cover  " />
                <img src="../../public/images/WorkImg1.svg" alt="Image 5" className="w-full h-auto object-cover  " />
                <img src="../../public/images/WorkImg1.svg" alt="Image 6" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-4">
                <img src="../../public/images/WorkImg1.svg" alt="Image 7" className="w-full h-auto object-cover  " />
                <img src="../../public/images/WorkImg1.svg" alt="Image 8" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 5 */}
            <div className="col-span-full">
                <img src="../../public/images/WorkImg1.svg" alt="Image 9" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-2 gap-4">
                <img src="../../public/images/WorkImg1.svg" alt="Image 10" className="w-full h-auto object-cover  " />
                <img src="../../public/images/WorkImg1.svg" alt="Image 11" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 7 */}
            <div className="grid grid-cols-2 gap-4">
                <img src="../../public/images/WorkImg1.svg" alt="Image 12" className="w-full h-auto object-cover  " />
                <img src="../../public/images/WorkImg1.svg" alt="Image 13" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 8 */}
            <div className="col-span-full">
                <img src="../../public/images/WorkImg1.svg" alt="Image 14" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 9 */}
            <div className="col-span-full">
                <img src="../../public/images/WorkImg1.svg" alt="Image 15" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 10 */}
            <div className="col-span-full">
                <img src="../../public/images/WorkImg1.svg" alt="Image 16" className="w-full h-auto object-cover  " />
            </div>

            {/* Row 11 */}
            <div className="col-span-full">
                <img src="../../public/images/WorkImg1.svg" alt="Image 17" className="w-full h-auto object-cover  " />
            </div>
        </div>

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
  );
};

export default BomchiCafeDetail;
