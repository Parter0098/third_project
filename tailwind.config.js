/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['tanha', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')]
}
