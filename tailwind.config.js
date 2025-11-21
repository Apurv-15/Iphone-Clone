/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1E3A8A', // Your custom blue color
          '50': '#F0F4FF',
          '100': '#D9E2FF',
          '200': '#A6BCFF',
          '300': '#7395FF',
          '400': '#406FFF',
          '500': '#1E3A8A',
          '600': '#1A3177',
          '700': '#162862',
          '800': '#121F4D',
          '900': '#0E1638',
        },
      },
    },
  },
  plugins: [],
}
