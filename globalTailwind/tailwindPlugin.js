const plugin = require('tailwindcss/plugin');

// Dados referentes ao design system
let namedStyles = {
	'.font-00': { fontFamily: 'Questrial'},
	'.font-01': { fontFamily: 'Rock Salt'},
	'.header-font-00': { fontFamily: 'Questrial', fontSize: '25px' },
	'.header-font-01': { fontFamily: 'Rock Salt', fontSize: '20px' },
	'.title-font': { fontFamily: 'Rock Salt' },
	'.subtitle-font-00': { fontFamily: 'b Berantas' },
	'.text-font': { fontFamily: 'Nunito' },
	'.header-size-02': { fontSize: '15px' },
	'.title-size-00': { fontSize: '100px' },
	'.title-size-01': { fontSize: '65px' },
	'.subtitle-size-00': { fontSize: '35px' },
	'.subtitle-size-01': { fontSize: '25px' },
	'.text-size-00': { fontSize: '30px' },
	'.text-size-01': { fontSize: '20px' },
	'.text-size-02': { fontSize: '15px' },
	'.bg-color-dark': { backgroundColor: '#191919' },
	'.bg-color-light': { backgroundColor: '#FFFFFF' },
	'.title-color': { color: '#A65AC9' },
	'.subtitle-color-dark': { color: '#CBCBCB' },
	'.subtitle-color-light': { color: '#646464' },
	'.text-color-dark': { color: '#FFFFFF' },
	'.text-color-light': { color: '#353535' },
};

module.exports = plugin.withOptions(() => {
  return function({addUtilities}) {
    addUtilities(namedStyles)
  }
})