import React from 'react';

export default function Process() {
  return (
    <section className="bg-transparent py-32">
      <div className="container mx-auto px-4">
        {/* Image for desktop */}
        <div className="hidden md:block">
          <img 
            src="../../public/images/ProcessWebimg.svg" 
            alt="Process for desktop" 
            className="mx-auto w-full h-auto max-w-6xl" // Added max width
          />
        </div>

        {/* Image for mobile */}
        <div className="block md:hidden">
          <img 
            src="../../public/images/ProcessMobimg.svg" // Use different mobile image
            alt="Process for mobile" 
            className="mx-auto w-full h-auto max-w-xs" // Adjust max width for mobile
          />
        </div>
      </div>
    </section>
  );
}

