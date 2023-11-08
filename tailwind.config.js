/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,cjs,mjs}"],
  theme: {
    extend: {
      colors: {
        black: "#342e37",
        yellow: "#f6d365",
        orange: "#fda085",
      },
      backgroundImage: (theme) => ({
        gradient:
          "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)",
      }),
      fontFamily: {
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      content: {
        logo: "url('./studio-qr-code-logo.png')",
      },
      maxWidth: {
        "200px": "200px",
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
