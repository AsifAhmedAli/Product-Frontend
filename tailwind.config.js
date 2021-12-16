module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // change container width
    container: {
      screens: {
        default: "1200px",
        sm: "100%",
        md: "100%",
        lg: "1000px",
        xl: "1200px",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#275392",
      signinBtn: "#3B88C3",
      signinBtnHover: "#0C71BE",
      authScreenBg: "#F5F8FF",
    }),
    textColorBlue: (theme) => ({
      ...theme("colors"),
      "orange-900": "rgb(255, 166, 0)",
      primary: "#275392",
    }),
    extend: {
      colors: {
        Auth_box_left: "#273D6C",
        Auth_box_right: "#2672C5",
      },
      height: (theme) => ({
        "6/7": "90%",
      }),
      width: (theme) => ({
        "6/7": "90%",
      }),
      spacing: {
        98: "32rem",
        100: "38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
}
