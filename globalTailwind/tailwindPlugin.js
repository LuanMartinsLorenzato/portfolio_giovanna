const plugin = require('tailwindcss/plugin');

// Dados referentes ao design system
let namedStyles = {
	'.primary-color-black': { color: '#1A1A1A' },
	'.primary-color-black-light': { color: '#1D1D1D' },
	'.secondary-color': { color: '#9F42CB' },
	'.text-color': { color: '#FFFFFF' },
	'.stroke-color-blue': { color: '#1DAAD7' },
	'.stroke-color-pink': { color: '#EF39F6' },
	'.text-font': { fontSize: '25px' },
	'.text-font-title': { fontSize: '50px' },
	'.text-font-subtitle': { fontSize: '40px' },
	'.text-font-family': { fontFamily: 'turret road' },
};

module.exports = plugin.withOptions(() => {
  return function({addUtilities}) {
    addUtilities(namedStyles)
  }
})