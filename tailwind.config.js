const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./common.css', './challenges/**/*.{js,ts,html}'],
  theme: {
    colors: {
      ...defaultTheme.colors,
      'blue-jeans': '#35A7FF',
      'fiery-rose': '#ff5964',
      'minion-yellow': '#ffe74c',
      'screamin-green': '#6cf178',
    },
  },
  fontFamily: {
    sans: ['Work Sans', 'sans-serif'],
  },
  plugins: [require('@tailwindcss/forms')],
};
