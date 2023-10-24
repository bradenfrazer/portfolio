/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "h1, h2": {
              fontFamily: "'Caveat Brush', sans-serif",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
