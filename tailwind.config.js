/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        redHat: ['redHat', 'sans'],
      },
    },
    colors: {
      red: 'hsl(14, 86%, 42%)',
      green: 'hsl(159, 69%, 38%)',
      rose_50: 'hsl(20, 50%, 98%)',
      rose_100: 'hsl(13, 31%, 94%)',
      rose_300: 'hsl(14, 25%, 72%)',
      rose_400: 'hsl(7, 20%, 60%)',
      rose_500: 'hsl(12, 20%, 44%)',
      rose_900: 'hsl(14, 65%, 9%)',
      white: '#ffffff',
      black: '000000',
    },
  },
  plugins: [],
}
