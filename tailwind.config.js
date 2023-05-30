/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Yeseva One"],
        bodyFont: ["Josefin Sans"],
      },
      colors: {
        pink: "#EF7385",
        fuchsia: "#F32CAD",
      },
    },
  },
  plugins: [],
};
