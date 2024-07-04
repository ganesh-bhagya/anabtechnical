/** @type {import('tailwindcss').Config} */


const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
      },
      colors: {
        "theme-color": "#C1C543",
        "title-color": "#3A2550",
      },
      screens: {
        "3xl": "1400px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
