/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkGrey: "#2D2B2B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
        teko: ["teko" , "sans-serif"]
      },
    },
    screens: {
      xxs: "200px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

