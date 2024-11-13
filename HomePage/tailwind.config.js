/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {

    textUnderlineOffset: {
      4: '6px'
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: '#2A4DD0',
        darkGreen: '#4CA154',
        veryDarkBlue: '#111729',
        blueGray: '#223344',
        lightGray: '#909193',
        veryLightBlue: '#F2F9FE',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

