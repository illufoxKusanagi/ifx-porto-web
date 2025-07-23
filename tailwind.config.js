/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    info: {
      100: "#D7E9FD",
      200: "#AFD3FA",
      300: "#88BEF8",
      400: "#60A8F5",
      500: "#3892F3",
      600: "#2D75C2",
      700: "#225892",
      800: "#163A61",
      900: "#0B1D31",
    },
    success: {
      100: "#CEEEE3",
      200: "#9DDEC7",
      300: "#6CCDAB",
      400: "#3CBD90",
      500: "#0BAC74",
      600: "#098A5D",
      700: "#076746",
      800: "#04452E",
      900: "#022217",
    },
    warning: {
      100: "#FDE7D3",
      200: "#FBCEA7",
      300: "#FAB67C",
      400: "#F89D50",
      500: "#F68524",
      600: "#C56A1D",
      700: "#945016",
      800: "#62350E",
      900: "#311B07",
    },
    danger: {
      100: "#FBD7D4",
      200: "#F7AFA9",
      300: "#F2887F",
      400: "#EE6054",
      500: "#EA3829",
      600: "#BB2D21",
      700: "#8C2219",
      800: "#5E1610",
      900: "#2F0B08",
    },
    grey: {
      100: "#DFE0E0",
      200: "#BFC0C1",
      300: "#9FA1A3",
      400: "#7F8184",
      500: "#5F6164",
      600: "#4C4E51",
      700: "#393B3D",
      800: "#262728",
      900: "#131414",
    },
    standardWhite: "#FFFFFF",
    standardBlack: "#000000",
    surfaceLightGrey: "#FAFAFA",
    surfaceWhite: "#FFFFFF",
  }
}

export default {
  content:
    ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ["Open Sans", "sans-serif"],
        'sans': ["Open Sans", "sans-serif"],
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3200px',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

