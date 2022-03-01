module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: ['"Open Sans"', "sans-serif"],
  },
  theme: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      colors: {
        tango: {
          50: "#fff9f4",
          100: "#fff2e9",
          200: "#fee0c8",
          300: "#fdcda7",
          400: "#fca764",
          500: "#FB8122",
          600: "#e2741f",
          700: "#bc611a",
          800: "#974d14",
          900: "#7b3f11",
        },
        shark: {
          50: "#f4f4f4",
          100: "#e8e9ea",
          200: "#c7c8c9",
          300: "#a5a7a9",
          400: "#616469",
          500: "#1d2228",
          600: "#1a1f24",
          700: "#161a1e",
          800: "#111418",
          900: "#0e1114",
        },
        mercury: {
          50: "#fefefe",
          100: "#fcfcfc",
          200: "#f8f8f8",
          300: "#f3f3f3",
          400: "#eaebeb",
          500: "#e1e2e2",
          600: "#cbcbcb",
          700: "#a9aaaa",
          800: "#878888",
          900: "#6e6f6f",
        },
      },
      fontSize: {
        nab: "0.9rem",
      },
    },
  },
  plugins: [],
};
