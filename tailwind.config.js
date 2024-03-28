/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: ({ theme }) => ({
      DEFAULT: "0.25rem 0.25rem " + theme("colors.gray.950"),
      sm: "0.125rem 0.125rem " + theme("colors.gray.950"),
    }),
    colors: {
      gray: {
        50: "#f6f7f6",
        100: "#e3e5e2",
        200: "#c4cbc4",
        300: "#a0a99f",
        400: "#838e83",
        500: "#606c61",
        600: "#4c554c",
        700: "#3f4640",
        800: "#353a36",
        900: "#2e332e",
        950: "#181b18",
        DEFAULT: "#838e83",
      },
      red: {
        50: "#fff4ed",
        100: "#ffe5d4",
        200: "#ffc7a8",
        300: "#ffa071",
        400: "#ff662f",
        500: "#fe4611",
        600: "#ef2c07",
        700: "#c61c08",
        800: "#9d190f",
        900: "#7e1810",
        950: "#440706",
        DEFAULT: "#ff662f",
      },
      yellow: {
        50: "#fefce8",
        100: "#fffac2",
        200: "#fff187",
        300: "#ffe243",
        400: "#ffd224",
        500: "#efb503",
        600: "#ce8b00",
        700: "#a46204",
        800: "#884c0b",
        900: "#733f10",
        950: "#432005",
        DEFAULT: "#ffd224",
      },
      green: {
        50: "#e8fff8",
        100: "#c6ffed",
        200: "#93ffe2",
        300: "#4effd8",
        400: "#02f5c0",
        500: "#00e6b2",
        600: "#00bc94",
        700: "#00977a",
        800: "#007761",
        900: "#006152",
        950: "#003730",
        DEFAULT: "#02f5c0",
      },
      blue: {
        50: "#eef8ff",
        100: "#d9eeff",
        200: "#bce3ff",
        300: "#8ed2ff",
        400: "#59b8ff",
        500: "#3298ff",
        600: "#1b79f5",
        700: "#1462e1",
        800: "#174fb6",
        900: "#19458f",
        950: "#142b57",
        DEFAULT: "#3298ff",
      },
      purple: {
        50: "#fcf4ff",
        100: "#f8e5ff",
        200: "#f3d0ff",
        300: "#e9acff",
        400: "#dd76ff",
        500: "#d042ff",
        600: "#c72cff",
        700: "#ac0ee2",
        800: "#8f12b7",
        900: "#751093",
        950: "#53006f",
        DEFAULT: "#c72cff",
      },
      white: "#ffffef",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        flip: {
          "50%": { transform: "rotateY(180deg)" },
        },
        wobble: {
          from: { transform: "translate3d(0,0,0)" },
          "15%": {
            transform: "translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)",
          },
          "30%": { transform: "translate3d(4%,0,0) rotate3d(0,0,1,0.75deg)" },
          "45%": {
            transform: "translate3d(-3%,0,0) rotate3d(0,0,1,-0.75deg)",
          },
          "60%": { transform: "translate3d(2%,0,0) rotate3d(0,0,1,0.5deg)" },
          "75%": {
            transform: "translate3d(-1%,0,0) rotate3d(0,0,1,-0.25deg)",
          },
          to: { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        fade: "fade 1s normal",
        flip: "flip 1s normal",
        wobble: "wobble 1s normal",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1, h2": {
              fontFamily: "'Quicksand Variable', system-ui, sans-serif",
            },
            p: {
              color: theme("colors.gray.950"),
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
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
            },
            p: {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
