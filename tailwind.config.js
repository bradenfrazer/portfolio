/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1, h2": {
              fontFamily: "'Caveat Brush', sans-serif",
            },
            p: {
              color: theme("colors.blue.950"),
            },
          },
        },
        invert: {
          css: {
            p: {
              color: theme("colors.blue.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
