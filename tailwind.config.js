/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.75rem', { lineHeight: '3rem' }],
      },
      colors: {
        'wh': '#FFFFFF',
        'gy': '#FBFBFB',
        'bk': '#181717',
        'bk-64': '#18171764',
        'bk-56': '#18171756',
        'bk-52': '#18171752',
        'bk-48': '#18171748',
        'bk-32': '#18171732',
        'bk-24': '#18171724',
        'bk-16': '#18171716',
        'bk-12': '#18171712',
        'bk-8': '#18171708',
        'bk-6': '#18171706',
        'bk-4': '#18171704',
      },
      width: {
        '19/20': '95%',
        '1/8': '12.5%',
      },
      opacity: {
        '48': '0.48',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

