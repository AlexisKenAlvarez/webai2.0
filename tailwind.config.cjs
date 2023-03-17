/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ginger: ['Ginger Bold'],
        roboto: ['Roboto Mono'],
        poppins: ['Poppins'],
        asap: ['asap']
      },
      colors: {
        mywhite: '#F4F4F4',
        myblack: '#28292A',
        pongkan: '#f86449'
      }
    },
  },
  plugins: [],
}
