/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
import plugin from '@tailwindcss/line-clamp';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    plugin
  ],
}

