/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f3',
          100: '#fce7e9',
          200: '#f9d0d5',
          300: '#f4a8b2',
          400: '#ec7789',
          500: '#e14d68',
          600: '#cd2f51',
          700: '#ac2343',
          800: '#8f203e',
          900: '#4A0404',
        },
        champagne: {
          50: '#FDFBF7',
          100: '#FBF7EF',
          200: '#F9F1E3',
          300: '#F7E7CE',
          400: '#F3D9B3',
          500: '#EFCB98',
          600: '#E6B573',
          700: '#D99E4E',
          800: '#C78830',
          900: '#9D6B1F',
        },
        roseGold: {
          50: '#fdf4f5',
          100: '#fbe8eb',
          200: '#f7d5da',
          300: '#efb3bd',
          400: '#e58899',
          500: '#d65f77',
          600: '#c0405d',
          700: '#B76E79',
          800: '#8f2943',
          900: '#7a253c',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        greatVibes: ['"Great Vibes"', 'cursive'],
        alexBrush: ['"Alex Brush"', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.05\" /%3E%3C/svg%3E')",
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'draw-line': 'drawLine 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
