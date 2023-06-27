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
        black: { 900: "#000000", "900_7f": "#0000007f", "900_3f": "#0000003f" },
        blue_gray: { 100: "#d4d4d4", 500: "#607d8b" },
        gray: {
          100: "#f2f2f2",
          500: "#a1a1a1",
          900: "#111111",
          "100_01": "#f5f5f5",
        },
        amber: { 500: "#f8be15", A200: "#f1c644" },
        blue: { 500: "#1da1f2", 800: "#0a66c2" },
        red: { 400: "#e4405f" },
        indigo: {
          600: "#45559d",
          700: "#314292",
          "700_01": "#34459c",
          "600_01": "#3c5a99",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat" },
      boxShadow: {
        bs1: "0px 0px  11px 0px #0000007f",
        bs2: "0px 4px  4px 0px #0000003f",
        bs: "0px 4.32px  28px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
