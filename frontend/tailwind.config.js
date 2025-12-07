/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
      },
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke, text-decoration-color',
      },
    },
  },
  plugins: [],
}