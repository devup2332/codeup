/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1CB6AB",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      screens: {
        "3xl": "2400px",
      },
    },
  },
  plugins: [],
};
