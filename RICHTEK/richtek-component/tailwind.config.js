/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'radial-radient': 'radial-gradient(at center center, #ffffff 0%, #b2b2b2 100%)'
      },
      screens: {
        'md': {
          'max': '768px'
        }
      }
    },
  },
  plugins: [],
}