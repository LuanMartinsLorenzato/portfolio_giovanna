/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'stats': "url('/assets/imgs/img_stats.png')",
      }
    },
  },
  plugins: [
    require('./globalTailwind/tailwindPlugin'),
  ],
}

