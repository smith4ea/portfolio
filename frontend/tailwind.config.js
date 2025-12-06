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
          hover: colors.stone[100],
          active: colors.stone[100],
          disabled: colors.stone[400],
        },
        secondary: {
          default: colors.neutral[800],
          hover: colors.neutral[700],
          active: colors.neutral[600],
          disabled: colors.neutral[900],
        },
        tertiary: {
          default: colors.orange[600],
          hover: colors.orange[500],
          active: colors.orange[700],
          disabled: colors.orange[300],
        },
        error: {
          default: colors.red[600],
          hover: colors.red[200],
          active: colors.red[700],
          disabled: colors.red[300],
        },
        neutral: {
          default: colors.neutral[300],
          hover: colors.neutral[200],
          active: colors.neutral[400],
          disabled: colors.neutral[500],
        },
        success: {
          default: colors.green[600],
          hover: colors.green[500],
          active: colors.green[700],
          disabled: colors.green[300],
        },
        warning: {
          default: colors.amber[500],
          hover: colors.amber[400],
          active: colors.amber[600],
          disabled: colors.amber[200],
        },
        border: {
          default: colors.neutral[600],
          light: colors.neutral[500],
          dark: colors.neutral[700],
        },
      },
    },
  },
  plugins: [],
}