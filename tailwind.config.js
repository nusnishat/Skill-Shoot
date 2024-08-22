/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': 'hsla(167, 44%, 25%, 1)', 
        'custom-coral' : 'hsla(20, 50%, 59%, 1)',
        'custom-light' : 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a font family
      },
      
    },
  },
  plugins: [],
}

