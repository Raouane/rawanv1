/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: 'rgb(32, 78, 94)',
          600: 'rgb(32, 78, 94)',
          700: 'rgb(28, 68, 82)',
        },
        'yellow': {
          DEFAULT: '#FFD700',
          600: '#FFE44D',
        },
      },
    },
  },
  plugins: [],
}
