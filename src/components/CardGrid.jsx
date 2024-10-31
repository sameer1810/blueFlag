import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BomchiCafeDetail from './BomchiCafeDetail';
import WanglowDetail from './WanglowDetail';
import WebDesignDetail from './WebDesignDetail';
import { useNavigate } from 'react-router-dom';

// Card Component
const Card = ({ image, category, project, description, route }) => {
  const navigate = useNavigate();
    return (
      
      <>
      {route && (  <div className="bg-transparent rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-white p-4 cursor-pointer"
        onClick={() => navigate(route)}
        >
          {/* Increase height here */}
          <img src={image} alt={project} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h3 className="text-sm text-white font-semibold uppercase mb-2">{category}</h3>
            <h2 className="text-lg text-white font-bold mb-1">{project}</h2>
            <p className="text-gray-400 text-sm">{description}</p>
            
     
      
          </div>
        </div>  )}
        </>
      
    );
  };

// CardGrid Component
const CardGrid = () => {

  const cards = [
    {
      image: '/images/Group 1000001771.svg',  // Replace with actual image URLs or imports
      category: 'Branding',
      project: 'Bomchi Cafe',
      description: 'UX Research Involves Gathering And Analyzing User Insights To Inform The Design And...',
      route: '/work/bomchi-cafe-detail',
    },
    {
      image: '/images/WorkImg2.svg',
      category: 'Web Design',
      project: 'Bomchi Cafe',
      description: 'UX Research Involves Gathering And Analyzing User Insights To Inform The Design And...',
      route: '/work/web-design-detail',
    },
    {
      image: '/images/WorkImg3.svg',
      category: 'Branding',
      project: 'Wanglow',
      description: 'UX Research Involves Gathering And Analyzing User Insights To Inform The Design And...',
      route: '/work/wanglow-detail',
    },
    {
      image: '/images/WorkImg4.svg',
      category: 'Branding',
      project: 'Bomchi Cafe',
      description: 'UX Research Involves Gathering And Analyzing User Insights To Inform The Design And...',
      route: '/work/wanglow-detail',
    },
  ];

  return (
    
                <div className="container mx-auto px-4 py-8">
                  {/* Use grid-cols-1 for mobile, and sm:grid-cols-2 for larger screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {cards.map((card, index) => (
                      <Card
                        key={index}
                        image={card.image}
                        category={card.category}
                        project={card.project}
                        description={card.description}
                        route={card.route}
                      />
                    ))}
                  </div>
                </div>
              
  );
};

export default CardGrid;
