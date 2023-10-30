/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: ({ theme }) => ({
      DEFAULT: "0.25rem 0.25rem " + theme("colors.primary.950"),
      sm: "0.25rem 0.25rem " + theme("colors.primary.800"),
    }),
    extend: {
      colors: {
        primary: {
          50: "hsl(197, 41%, 97%)",
          100: "hsl(202, 35%, 94%)",
          200: "hsl(202, 33%, 89%)",
          300: "hsl(203, 33%, 82%)",
          400: "hsl(208, 32%, 74%)",
          500: "hsl(211, 31%, 67%)",
          600: "hsl(217, 27%, 59%)",
          700: "hsl(218, 21%, 54%)",
          800: "hsl(217, 19%, 41%)",
          900: "hsl(215, 17%, 34%)",
          950: "hsl(217, 18%, 20%)",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1, h2": {
              fontFamily: "'Caveat Brush', sans-serif",
            },
            p: {
              color: theme("colors.primary.950"),
            },
            a: {
              transitionProperty: "opacity",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
              "&:hover": {
                opacity: 0.5,
              },
            },
          },
        },
        invert: {
          css: {
            p: {
              color: theme("colors.primary.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
