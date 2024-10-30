// src/components/BackgroundImage.jsx
import React from 'react';

const BackgroundImage = ({ children }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Background Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/5453/220e/fa7f3621ab5a180b2d740d7ab51deac8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTq3vFGtKBeustlvjAxH-9zoELNtODCFr~WIHGUrLEFAUakvYVE8fOYQlQSZT2hWcSu8-E9R~i1RmkwzvlO1YDOBnXV15cS1UQpwBt3U~J~8UUXiByZmfBr8~RTu8oQM-b1hx-wLyRAfwznhu6lS8mcjH94B3WiUFk3CwxrciCy-Hf8IigXpnRMogV~J3WWCtZ78qWz0pmwq7bnmGwX13iKvhTIxc0gVSXNYeZ5yWg~2W~fR5DSYOJaR9dHuMp~KnjgXLuvG29TbAV188HoIY1Exdyb1rHF~Nx4u1D3AgPZCTcqr3kHvQbtISjITCMtzS7nwz1e7JRCPK5oBYBZxsg__"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg" // Ensures the image covers the area
      />
      
      {/* Overlay */}
      <div className="relative bg-black bg-opacity-50 p-6 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
