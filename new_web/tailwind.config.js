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
      light_navy:'#151B54',
      border_blue:'#082567',
      transparent:'rgba(0,0,0,0)',
      cyan:'rgb(6 182 212)',
      blue:'rgb(3 105 161)'
    },
    
  },
  plugins: [],
}