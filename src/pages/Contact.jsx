import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactHeading from '../components/ContactHeading';


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Contact Heading appears first */}
      <ContactHeading />

      <ContactForm/>
    </div>
  );
};

export default Contact;
