/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
        acumin: "acumin",
        centauri: "centauri",
      },

      minHeight:{
        '3/4': '75%',
      },

      colors:{
        'gaiat-blue':'#14213D',
        'boyzin-blue':'#2C67F2',
        'soda-orange':'#FCA311',
        'chuuch-gray':'#E5E5E5',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}