/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#0B1125',
      text: '#E3E3E3',
      primary: '#1876D2',
      error: '#FFB4AB',
      error2: '#BA1A1A',
      disabled: '#737677',
      white: '#FFFFFF',
    },
    extend: {
      fontSize: {
        t1: ['0.875rem', { lineHeight: '1rem', fontWeight: '400' }],
        t2: ['0.875rem', { lineHeight: '1rem', fontWeight: '600' }],
        t3: ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        s1: ['1.25rem', { lineHeight: '1rem', fontWeight: '700' }],
        s2: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        s3: ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }],
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        grotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-scroll': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#4a4f63 transparent',
        },
        '.custom-scroll::-webkit-scrollbar': {
          width: '6px',
        },
        '.custom-scroll::-webkit-scrollbar-button': {
          display: 'none',
          width: '0',
          height: '0',
          color: 'transparent',
          background: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-button:single-button': {
          display: 'none',
          width: '0',
          height: '0',
          background: 'transparent',
          color: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-button:single-button:vertical:decrement':
          {
            display: 'none',
            width: '0',
            height: '0',
            background: 'transparent',
            color: 'transparent',
          },
        '.custom-scroll::-webkit-scrollbar-button:single-button:vertical:increment':
          {
            display: 'none',
            width: '0',
            height: '0',
            background: 'transparent',
            color: 'transparent',
          },
        '.custom-scroll::-webkit-scrollbar-button:start:decrement': {
          display: 'none',
          width: '0',
          height: '0',
          background: 'transparent',
          color: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-button:end:increment': {
          display: 'none',
          width: '0',
          height: '0',
          background: 'transparent',
          color: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-button:vertical:start:decrement': {
          display: 'none',
          width: '0',
          height: '0',
          background: 'transparent',
          color: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-button:vertical:end:increment': {
          display: 'none',
          width: '0',
          height: '0',
          background: 'transparent',
          color: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.custom-scroll::-webkit-scrollbar-thumb': {
          background: '#4a4f63',
          'border-radius': '9999px',
          margin: '10px 0',
        },
      })
    }),
  ],
}
