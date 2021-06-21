// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      main: {
        100: 'var(--color-main-100)',
        500: 'var(--color-main-500)',
      },
      subyellow: {
        100: 'var(--color-subyellow-hover)',
        500: 'var(--color-subyellow)',
      },
      line: {
        100: 'var(--color-line)',
      },
      blue: {
        100: 'var(--color-blue-100)',
        500: 'var(--color-blue-500)',
        900: 'var(--color-blue-900)',
      },
      lightblue: {
        bg: 'var(--color-lightblue-bg)',
        placeholder: 'var(--color-lightblue-placeholder)',
        high: 'var(--color-lightblue-high)',
        500: 'var(--color-lightblue)',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
    },
    extend: {},
  },
  corePlugins: {
    // fontFamily: false,
    // fontWeight: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
