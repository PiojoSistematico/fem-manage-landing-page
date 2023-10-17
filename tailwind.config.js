/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-red": "#f25f3a",
        "dark-blue": "#242d52",
        "dark-grayish-blue": "#9095a7",
        "very-dark-blue": "#1d1e25",
        "Very Pale Red": "#ffefeb",
        "Vary Light Gray": "#fafafa",
      },
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
