/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Morado": "#533E85",
        "App-azul-oscuro": "#291F71",
        "Rosado-Claro": "#E7D9EA",
        "verde-agua": "#11698E",
        "Azul-oscuro": "#19456B",
        "Verde-menta": "#16C79A",
        "Casi-Blanco": "#F7F7F8",
        "Amarillo-app": "#FFD44A",
        "Negro-app": "#0C0C0C"
      },
      fontFamily: {
        Inter : ['Inter']
      }
    },
  },
  plugins: [],
}

