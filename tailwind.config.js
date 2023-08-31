/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        red: '#F46363',
        dark: '#34313D',
        'very-dark-purple': '#3A3054',
        'dark-purple': '#4B3F6B',
        gray: '#9E9AA8',
        'light-gray': '#EFF1F7',
        'dark-gray': '#BFBFBF',
        'nav-line': '#524a69',
        cyan: '#2BD0D0',
        'cyan-hover': '#9AE3E3',
        line: '#e6e5e9',
        footer: '#232127'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      'shorten-mobile': 'url("/bg-shorten-mobile.svg")',
      'shorten-desktop': 'url("/bg-shorten-desktop.svg")',
      'bg-boost-mobile': 'url("/bg-boost-mobile.svg")',
      'bg-boost-desktop': 'url("/bg-boost-desktop.svg")'
    },
    fontSize: {
      h1: '5rem', // 80px
      h2: '2.625rem', // 42px
      h3: '2.5rem', // 40px
      h4: '1.75rem', // 28px
      h5: '1.375rem', // 22px
      h6: '1.25rem', // 20px
      lg: '1.125rem', // 18px
      md: '1rem', // 16px
      sm: '0.9375rem' // 15px
    },
    lineHeight: {
      h1: '5.625rem', // 90px
      h2: '3rem', // 48px
      h3: '3rem', // 48px
      h4: '3rem', // 48px
      h5: '2.0625rem', // 33px
      h6: '1.875rem', // 30px
      lg: '1.875rem', // 30px
      md: '1.5rem', // 24px
      sm: '1.4375rem' // 23px
    },
    borderRadius: {
      sm: '5px',
      md: '10px',
      xl: '28px',
      full: '50%'
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
