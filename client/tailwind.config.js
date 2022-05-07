module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
        'very-dark-gray': 'rgb(20, 22, 37)',
        'dark-gray': 'rgb(31, 33, 57)',
      },
      gridTemplateColumns: {
        'card': 'auto auto',
      },
      gridTemplateRows: {
        'card': 'auto 8px 1fr 1fr',
      },
    },
  },
  plugins: [],
}
