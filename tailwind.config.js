/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#0a0e17'
        }
      },
      height: {
        90: '22rem'
      },
      borderRadius: {
        '4xl': '2.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
     require('@tailwindcss/typography')
  ],
}
