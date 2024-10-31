import React, { useState } from 'react';
import { Html, Button } from "@react-email/components";
import emailjs from '@emailjs/browser';  

const ContactForm = (props) => {
  console.log(props);
  const { url } = props;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    emailjs
      .send(
        'service_byvpjxh', 
        'template_lenwqpi',
        templateParams,
        'LIWHtYZhrozHOqF2J'      
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message was sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('There was an error sending your message.');
        }
      );
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-4">
        {/* Contact Info + Form Container */}
        <div className=" p-5 md:flex md:h-full justify-between items-stretch border border-customPurple rounded-lg overflow-hidden">
          {/* Left Side - Contact Info */}
          <div className="rounded-lg bg-gradient-to-t from-customColor-dark to-customColor-light  text-white p-8 md:w-1/2 flex flex-col justify-between">
            
            <div className="flex-grow ">
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className='mb-32'>Say something to start a live chat!</p>
              <ul className="space-y-4 mb-8 flex flex-col justify-center items-start flex-grow">
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-2"></i> +91-9998882220
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i> heisenberg@example.com
                </li>
              </ul>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram" className="text-xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:w-1/2 w-full bg-black flex flex-col justify-between">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Sameer"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-gray-300  bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Mansuri"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-gray-300  bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Sameer@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-gray-300  bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="1234567895"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-gray-300  bg-transparent"
                  />
                </div>
              </div>

              
              <div className="mt-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-transparent"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="bg-customPurple text-white px-4 py-2 rounded mt-4 hover:bg-customPurple"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
