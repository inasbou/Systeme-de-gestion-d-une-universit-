/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0E63A1",
        bluetext: "#115B91",
        bluenav: "rgba(14, 99, 161, 0.25)",
      },
      fontFamily: {
        inter: ["Roboto", "sans"],
      },
    },
  },
  plugins: [],
};
