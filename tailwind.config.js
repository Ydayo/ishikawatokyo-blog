/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      blue: "#0F172A",
      transparent: "rgba(255, 255, 255, 0.1)",
    },
    borderRadius: {
      xl: "50px",
      md: "20px",
    },
  },
  plugins: [],
};
