/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        "3xl":"0 35px 35px rgba(94, 234, 212, 0.25)"
      }
    },
  },
  plugins: [],
}

