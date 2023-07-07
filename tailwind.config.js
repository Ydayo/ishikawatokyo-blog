/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      blue: "#0F172A",
      transparent: "rgba(255, 255, 255, 0.1)",
      slate: "rgb(241 245 249)",
      white: "rgb(255, 255, 255)",
    },
    borderRadius: {
      xl: "50px",
      md: "20px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
