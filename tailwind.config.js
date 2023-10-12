/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        moderateViolate: "hsl(263, 55%, 52%)",
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barlowSemiCond: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
