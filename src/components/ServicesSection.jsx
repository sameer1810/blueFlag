import React, { useState } from 'react';
import { FaLaptopCode, FaPencilRuler, FaPaintBrush, FaLightbulb } from 'react-icons/fa'; // Import relevant icons
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'UI/UX Design',
    description: 'We design visually stunning, user-friendly websites customized for your brand. Our sites deliver an exceptional experience across all devices, keeping visitors engaged and your message impactful.',
    icon: <FaPencilRuler />,
  },
  {
    title: 'Web App Development',
    description: 'We create fast, secure, and scalable webapps. Our web app development solutions ensure flawless performance, customized to meet your business needs with the latest technology.',
    icon: <FaLaptopCode />,
  },
  {
    title: 'Logo Design',
    description: 'Design a unique logo that reflects your brand. Our logo design services focus on creativity and simplicity, ensuring your logo is visually appealing and easily recognizable, helping to make a lasting impression on your audience.',
    icon: <FaPaintBrush />,
  },
  {
    title: 'Branding',
    description: 'Establish a strong brand identity that resonates with your audience. Our services boost your brand value and recall value through effective messaging and visuals, helping you stand out and build lasting connections.',
    icon: <FaLightbulb />,
  },
  {
    title: 'Thumbnail Design',
    description: 'Create captivating thumbnails that grab attention and drive clicks. Our Thumbnail Design Service enhances first impressions and boosts click-through rates, helping you attract more viewers and maximize engagement.',
    icon: <FaLightbulb />,
  },
  {
    title: 'Website Developement',
    description: 'We will create and manage your website quickly & efficiently using WordPress. Our Service includes customizable templates & responsive designs, allowing you to launch your site effectively and driving user engagement.',
    icon: <FaLightbulb />,
  },
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate  = useNavigate()


  const serviceNavigate= ()=>{
      navigate("/service")
  }

  return (
    <div
      className="relative p-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`rounded-xl bg-transparent border-2 border-white text-white p-8 flex flex-col items-center transition-all duration-500 ${isHovered ? 'bg-customPurple' : 'bg-black'}`}>
        <div className="text-5xl mb-4">{service.icon}</div>
        <h2 className="text-lg font-semibold">{service.title}</h2>
        {isHovered ? (
          <div className="absolute top-0 left-0 w-full h-full p-4 bg-customPurple flex flex-col justify-center items-center rounded-xl z-10 transition-opacity duration-500">
            <p className="text-white mb-4">{service.description}</p>
            <button className="text-white underline"
            onClick={()=>serviceNavigate()}
            >View All</button>
          </div>
        ) : (
          <button className="text-customPurple  mt-4"
          
          
          >Learn More</button>
        )}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4 w-2/3 mx-auto mt-20 ">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesSection;
