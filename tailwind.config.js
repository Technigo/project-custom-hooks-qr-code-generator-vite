/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        customGreen: "#006600", 
        customYellow: "#E3CB00"},
    }, 
  },
  plugins: [],
}

