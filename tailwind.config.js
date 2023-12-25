/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "check": "#52bae7",
        "badge": "#4ca984",
      },
      backgroundColor: {
        "main": "#202c33",
        "sub": "#0b141a",
        "side": "#111b22",
        "badge": "#4ca984",
        "outgoing": "#265d4c",
        "incoming": "#202c33",
        "dark": "#0c1317",
      },
      backgroundImage: {
        "bgmain": `url(/src/assets/images/bg.png)`
      }
    },
  },
  plugins: [],
}

