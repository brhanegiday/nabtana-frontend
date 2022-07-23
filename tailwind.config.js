module.exports = {
  darkMode: "class",
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        aclonica: ["Aclonica"],
      },
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      colors: {
        tango: {
          50: "#fff3fb",
          100: "#fee6f6",
          200: "#fdc2e9",
          300: "#fc9ddc",
          400: "#fa53c1",
          500: "#f809a7",
          600: "#df0896",
          700: "#ba077d",
          800: "#950564",
          900: "#7a0452",
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
        california: {
          50: "#fffaf2",
          100: "#fff5e6",
          200: "#ffe5bf",
          300: "#ffd699",
          400: "#feb74d",
          500: "#fe9800",
          600: "#e58900",
          700: "#bf7200",
          800: "#985b00",
          900: "#7c4a00",
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
        nab: "15px",
      },
    },
  },
};
