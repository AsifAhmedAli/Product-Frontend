module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // change container width
    container: {
      screens: {
        default: '1200px',
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1300px"
      }
    },
    extend: {
      colors: {
        'Auth_box_left': '#273D6C',
        'Auth_box_right': '#2672C5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
