/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    screens: {
      xxs: '375px',
      xs: '475px',
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      zIndex: {
        1000: '1000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-seri'],
      },
      colors: {
        general: '#0081A7',
        primary: '#00AFB9',
        secondary: '#F07167',
        optional: '#FED9B7',
        silver: '#bebebe',
        'dark-gray': '#6C757D',
        'ligth-gray': '#CDCDCD',
        success: '#22bb33',
        danger: '#F32013',
        warning: '#ffcc00',
      },
    },
  },
  plugins: [],
};
