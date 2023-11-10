/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#f25f3a",
        "primary-2": "#242d52",
        "neutral-1": "#9095a7",
        "neutral-2": "#1d1e25",
        "neutral-3": "#ffefeb",
        "neutral-4": "#fafafa",
        "neutral-5": "#ffffff",
      },
      fontFamily: {
        BeVietnamPro: ["BeVietnamPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
