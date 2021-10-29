module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // change container width
    container: {
      screens: {
        default: '1200px',
        sm: "100%",
        md: '769px',
        lg: "1024px",
        xl: "1300px"
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'signinBtn': '#3B88C3',
      'signinBtnHover': '#0C71BE',
      'authScreenBg': '#F5F8FF'
    }),
    extend: {
      colors: {
        'Auth_box_left': '#273D6C',
        'Auth_box_right': '#2672C5',
      },
      height: theme => ({
        "6/7": "90%",
      }),
      width: theme => ({
        "6/7": "90%",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
