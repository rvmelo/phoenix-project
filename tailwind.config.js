/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

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
}
