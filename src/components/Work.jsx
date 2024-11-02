import React from "react";
import CardGrid from "./CardGrid";
import { useNavigate } from "react-router-dom";
const Work = ()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-transparent text-white py-16 px-6">
            <div className="bg-transparent text-center mb-16 relative">
                {/* Large background text */}
                    <h1 className="text-transparent text-[3rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider stroke-blue-600">
                        OUR WORK
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
                    You can see our Best work here
                    </p>
            </div>

            <CardGrid/>

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

export default Work;