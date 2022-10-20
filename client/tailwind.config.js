/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      fontFamily:{
        inter:['Inter'],
        tangarine:['Tangerine'],
        poppins:['Poppins'],
        "mea-culpa":['Mea Culpa']
      },
      colors: {
        dark:"#273036"
      }
    },
  },
  plugins: [],
}
