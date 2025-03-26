/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray': {
          900: '#0f1112',
          800: '#1a1c1e',
          700: '#2c2e30',
        },
        'red': {
          500: '#ef4444',
          600: '#dc2626',
        }
      }
    },
  },
  plugins: [],
};