/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: 'Poppins'
    },
    colors: {
      navy: '#090937',
      blond: '#F7F7F7',
      light_navy:'#151B54'
    },
    
  },
  plugins: [],
}