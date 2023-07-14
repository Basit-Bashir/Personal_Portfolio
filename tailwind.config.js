/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 2s ease-in infinite",
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(1px)" },
        },
      },
    },
  },

  plugins: [],
};
