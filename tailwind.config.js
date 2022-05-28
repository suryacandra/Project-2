module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      screens: {
        'xl': '1320px',
        'xxs': '640px',
        'xxsm': {'max': '640px'},
        'xxsmm': {'max': '1024px'},
      },
      boxShadow: {
        'sp': '0px -10px 10px -1px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
