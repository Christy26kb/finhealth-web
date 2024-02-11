/** @type {import('tailwindcss').Config} */

const colors = require('./themes/colors');
const borderRadius = require('./themes/borderRadius');
const fontSize = require('./themes/fontSizes');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '480px' },
        tablet: { min: '481px', max: '1024px' },
        desktop: { min: '1025px' }
      },
      colors,
      borderRadius,
      fontSize,
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      width: {
        352: '352px'
      },
      margin: {
        '5px': '5px'
      },
      boxShadow: {
        base: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
        inner: '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset',
        small: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        medium:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
        large:
          '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
        xl: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
        '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        filterShadow: '0px 10px 22px 0px rgba(45, 77, 108, 0.15)',
        searchShadow: '1px 2px 17px -1px rgba(0, 0, 0, 0.06)'
      },
      fontFamily: {
        inter: ['Inter']
      }
    }
  },
  plugins: []
};
