/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      blue: "#0F172A",
      transparent: "rgba(255, 255, 255, 0.1)",
      transparent2: "rgba(255, 255, 255, 0.8)",
      slate: "rgb(241 245 249)",
      white: "rgb(255, 255, 255)",
      rose: "rgb(244, 63, 94)",
      orange: "#EE9B01",
      darkOrange: "#DA6A00",
      paleblue: "#806491",
    },
    // colors: {
    //   white: "#fff",
    //   orange: "#DA6A00",
    // },
    borderRadius: {
      xl: "50px",
      md: "20px",
      full: "50%",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    // boxShadow: {
    //   black: "0px 0px 22px -4px #c9c9c9",
    //   white: "0px 0px 22px -4px #ffffff",
    // },
  },
  plugins: [],
};
