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
        white: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#FFFFFF",
          600: "#e6e6e6",
          700: "#bfbfbf",
          800: "#999999",
          900: "#7d7d7d",
        },
      },
      fontSize: {
        nab: "0.95rem",
      },
    },
  },
  plugins: [],
};
