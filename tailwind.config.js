/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#F4B41A', // Jaune MonHajj
          500: '#F4B41A',
          600: '#E5A918',
          700: '#D69E16',
        },
        black: {
          DEFAULT: '#143642', // Noir MonHajj
          500: '#143642',
          600: '#0F2931',
          700: '#0A1C20',
        }
      },
    },
  },
  plugins: [],
}
