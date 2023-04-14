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
      colors: {
        textColorLight: '#5651ef',
        textColorDark: '#fff',
        textColorAlternate: '#ff014f',
        bodyColorLight: 'bg-gray-800',
        bodyColorDark: 'bg-gray-100',
      }
    },
  },
  plugins: [],
}