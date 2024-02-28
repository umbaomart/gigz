/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      screens: {
        'lg': {'max': '955px'},
        'md': {'max': '768px'}
      }
    },
  },
  plugins: [],
}

