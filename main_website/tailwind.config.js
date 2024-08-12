/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "platform-background": "url('/src/assets/images/farm-1.jpg')",
      },
      fontFamily: {
        sfPro: ["SF Pro Display", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        slider_animation: "slider 3s linear infinite",
      },
      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
