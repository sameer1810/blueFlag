import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [seeAll, setSeeAll] = useState(false);

  const faqs = [
    { question: "Can You Redesign Our Existing Website?", answer: "Yes, we offer complete redesign services." },
    { question: "Will My Website Be Mobile-Friendly And Responsive?", answer: "Absolutely, all websites we build are fully responsive." },
    { question: "Can You Create Graphics For Social Media Platforms?", answer: "Yes, we design graphics for all social media platforms." },
    { question: "Can You Assist With Creating A Consistent Brand Identity?", answer: "Absolutely! Creating a consistent brand identity is one of our core strengths. We can help develop a comprehensive brand identity that includes logo design, color schemes, typography, visual style guidelines, and more. We ensure that all visual elements work harmoniously to represent your brand consistently across different platforms and marketing materials." },
    { question: "Do You Offer Ongoing Website Maintenance?", answer: "We offer monthly maintenance plans tailored to your needs." },
    { question: "How Long Does It Take To Complete A Website?", answer: "The timeline depends on the complexity, but generally 4-6 weeks." },
    { question: "Can You Help With SEO Optimization?", answer: "Yes, we provide SEO services to improve your site’s ranking." },
    { question: "Do You Provide E-Commerce Solutions?", answer: "Yes, we develop e-commerce websites with full functionality." },
  ];

  // Function to toggle FAQ answers
  const toggleQuestion = (index) => {
    // If already expanded, close it, otherwise expand
    if (expanded === index) {
      setExpanded(null); // Collapse
    } else {
      setExpanded(index); // Expand
    }
  };

  // Function to toggle See All / See Less
  const toggleSeeAll = () => {
    setSeeAll(!seeAll); // Toggle between true and false
  };

  return (
    <div className="bg-transparent text-white py-10 px-4">

      <div className="max-w-6xl mx-auto">
        {faqs.slice(0, seeAll ? faqs.length : 4).map((faq, index) => (
          <div key={index} className="border border-gray-600 mb-4 rounded-md overflow-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {/* Icon with rotation transition */}
              <div
                className={`transform transition-transform duration-300 ${expanded === index ? "rotate-45" : "rotate-0"
                  }`}
              >
                {expanded === index ? <FaTimes className="text-white" /> : <FaPlus className="text-white" />}
              </div>
            </div>

            {/* Collapsible answer with transition */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <hr className="border-t border-gray-600 mx-4" />
              <div className="px-4 pb-4 pt-2 text-gray-400 text-base leading-relaxed text-left">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}

        {/* See All / See Less Button */}
        <div className="flex justify-center mt-6">
          {/* Button to toggle between See All and See Less with smooth transition */}
          <button
            onClick={toggleSeeAll}
            className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md hover:bg-customPurple transition-all duration-500 ease-in-out"
          >
            {seeAll ? "See Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
