/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif']
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

