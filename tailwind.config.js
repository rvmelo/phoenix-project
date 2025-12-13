/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      background: '#0B1125',
      text: '#E3E3E3',
      primary: '#1876D2',
      error: '#FFB4AB',
      error2: '#BA1A1A',
      disabled: '#737677',
      white: '#FFFFFF',
    },
    extend: {
      fontSize: {},
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        grotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
