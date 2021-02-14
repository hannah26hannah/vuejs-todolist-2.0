module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.{vue,js}", "./public/**/*.html"]
  },
  theme: {
    colors: {
      primary: {
        green: "#55efc4",
        lightblue: "#00cec9",
        blue: "#0984e3",
        lightgray: "#ced4da",
        darkgray: "#495057",
        moonlight: "#F9CB54",
        lightmoonlight: "#ffeab4",
        darkRed: "#dc3545"
      },
      secondary: {
        100: "#fffff0",
        300: "#faf089",
        500: "#ecc94b",
        700: "#b7791f",
        900: "#744210"
      }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
    }
  },
  variants: {
    extend: {
      fontWeight: []
    }
  },
  plugins: []
};
