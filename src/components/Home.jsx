// Home.js
import React from 'react';
import Contact from '../pages/Contact';
import FAQSection from './FAQ';
import ServicesSection from './ServicesSection';
import HomeSection from './HomeSection';
import FooterQuote from './FooterQuote';
import Process from './Process';

const Home = () => {
    return (
        <div className="relative  py-10">
            
            <HomeSection></HomeSection>
            <div className="text-center mb-20 relative">
                {/* Sevice heading */}
                <h1 className="text-transparent text-center text-[4rem] lg:text-[10rem] uppercase font-bold stroke-text tracking-wider stroke-blue-600 font-poppins">
                    Services
                </h1>
                {/* Subtitle */}
                <p className="mt-1 text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
                Excellence in Every Service
                </p>
                <ServicesSection></ServicesSection>
            </div>

            {/* process heading */}
            <h1 className="text-transparent text-center text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] lg:mt-40 leading-none font-extrabold tracking-wider stroke-text uppercase stroke-pink-500 font-poppins">
                PROCESS
            </h1>
            {/* <Stepper></Stepper> */}
            <Process></Process>
            
            {/* Large outlined text */}
            <h1 className="text-transparent text-center text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] lg:mt-20 lg:mb-12 leading-none font-extrabold tracking-wider stroke-text uppercase stroke-pink-500 font-poppins">
                FAQ
            </h1>
            <FAQSection></FAQSection>
            
            <Contact></Contact>
            <FooterQuote></FooterQuote>
            
        </div>
    );
};

export default Home;
