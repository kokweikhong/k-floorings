/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{html,js}", "./components/**/*"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
      },
      colors: {
        primary: "#806840",
      },
    },
  },
  plugins: [],
};
