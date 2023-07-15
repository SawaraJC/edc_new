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
      navy: '#13182B',
      navy2: '#1E2746',
      navy3:'#29355A',
      navy4:'#3A4373',
      navy5:'#5B73B3',
      light_navy:'#B6C7E1',
      blond:'#E3EFFB',
      white:'#ffffff',
      border_blue:'#082567',
      transparent:'rgba(0,0,0,0)',
      cyan:'rgb(6 182 212)',
      blue:'rgb(3 105 161)'
    },
    
  },
  plugins: [],
}