/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        primary: {
          default: colors.stone[300],
          //hover: '#...',
          //active: '#...',
          //disabled: '#...',
        },
        secondary: {
          default: colors.neutral[800],
          //hover: '#...',
          //active: '#...',
          //disabled: '#...',
        },
        tertiary: {
          default: colors.orange[600],
          //hover: '#...',
          //active: '#...',
          //disabled: '#...',
        },
        error: {
          default: colors.red[600],
          //hover: '#...',
          //active: '#...',
          //disabled: '#...',
        },
        neutral: {
          default: colors.neutral[300],
          //hover: '#...',
          //active: '#...',
          //disabled: '#...',
        },
        icon: {
          default: colors.neutral[300],
          //hover: '#...',
          //active: '#...',
          //disabled: '#...',
        },
        brd: colors.neutral[600],
      },
    },
  },
  plugins: [],
}