/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem'
      }
    },
  },
  plugins: [],
}
