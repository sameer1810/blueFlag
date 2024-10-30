/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins font
      },
      colors: {
        customPurple: '#6947EF',// Define your custom color here
        customColor:  {
          light: '#6947EF', // Light purple
          dark: '#3C2989',
        }, 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #191139 0%, #000 15%)',
        'pink-gradient':'radial-gradient(50% 100% at left, #191139 0%, #000 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      
    },
  },
  plugins: [],
}



