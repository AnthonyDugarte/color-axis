import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        ca: {
          black: '#000000',
          white: '#FFFFFF',
          blue: '#0C8DE3',
          navy: '#2440A7',
          purple: '#6B30AB',
          pink: '#CD3592',
          salmon: '#FE6A71',
        },
      },
      backgroundImage: {
        'ca-gradient': 'linear-gradient(135deg, #2440A7, #6B30AB, #CD3592, #FE6A71)',
        'ca-gradient-h': 'linear-gradient(90deg, #0C8DE3, #6B30AB, #CD3592)',
        'ca-gradient-card': 'linear-gradient(135deg, #6B30AB, #CD3592)',
      },
    },
  },
  plugins: [],
} satisfies Config
