/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
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

