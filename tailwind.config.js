module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          400: "#afabb0",
          600: "#7e7e7e",
          800: "#494949",
          900: "#141414",
          "600_01": "#6b6b6b",
          "800_01": "#3b3b3b",
        },
        blue: { 500: "#1d9bf0" },
        light_blue: { 800: "#0076b2" },
        black: { 900: "#000000" },
        red: { A700_01: "#e90707", A700: "#ff0000" },
        white: { A700: "#ffffff" },
        indigo: { 600: "#3d5a98" },
      },
      fontFamily: {
        bigshouldersdisplay: "Big Shoulders Display",
        inter: "Inter",
        googlesans: "Google Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
