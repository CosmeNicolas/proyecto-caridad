/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-oscuro":"#001524",
        "verde-militar": "#445D48",
        "varde-tierra": "#D6CC99",
        "marron-claro": "#FDE5D4"
      },
      fontFamily: {
        Inter : ['Inter']
      },
      animation:{
        'spin-slow': 'spin 20s linear infinite'
      }
    },
  },
  plugins: [],
}

