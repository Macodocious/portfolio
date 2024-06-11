/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './**/*.{html,js}',
  ],
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

