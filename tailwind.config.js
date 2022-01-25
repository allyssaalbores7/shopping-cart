module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      // accent
      primary_accent: "#1b4acb",
      secondary_accent: "#219653",

      // text
      primary_text: "#0f172a",
      secondary_text: "#475569",
      tertiary_text: "#72838c",

      background: "#f4f5f6",
      white: "#ffffff",
    },
  },
  extend: {
    fontFamily: {
      inter: ['"Inter"', "system-ui"],
      poppins: ['"Poppins"', "system-ui"],
    },
  },
  /* eslint-disable global-require */
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
