/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: { orange: "rgb(255, 166, 0)" },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "transformX(-3000px)" },
          "100%": { transform: "translateX(-50%)", left: "50%" },
        },
        bounceIn: {
          "0%": {
            transform: "translateX(-1000px)",
          },
          "65%": {
            transform: "translateX(20%)",
          },
          "75%": {
            transform: "translateX(-15%)",
          },
          "85%": {
            transform: "translateX(15%)",
          },
          "95%": {
            transform: "translateX(-3%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("autoprefixer")],
};
