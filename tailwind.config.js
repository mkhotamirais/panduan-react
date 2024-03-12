/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        geser: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "rotate(3deg)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        geser: "geser 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
