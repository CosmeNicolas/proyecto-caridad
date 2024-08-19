const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-oscuro":"#001524",
        "verde-militar": "#445D48",
        "verde-tierra": "#D6CC99",
        "marron-claro": "#FDE5D4",
        "amarillo": "#FFD44A",
        "negro-mate": "##1E1E1E",
        "marron": "##BF9D73",
        "blanco": "#EFECDD"
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

