module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        sm: '0.4rem',
        md: '0.8rem',
        xl: '2rem',
        DEFAULT: '0.8rem'
      },
      colors: {
        relief: 'rgba(0,0,0, .2)',
        accent: 'rgba(0,0,0, .1)',
        primary: {
          accent: 'rgba(var(--katui-primary), .2)',
          DEFAULT: 'rgba(var(--katui-primary), 1)',
          light: 'rgba(var(--katui-primary), .8)'
        },
        red: {
          accent: 'rgba(var(--katui-red), .2)',
          DEFAULT: 'rgba(var(--katui-red), 1)',
          light: 'rgba(var(--katui-red), .8)'
        },
        orange: {
          accent: 'rgba(var(--katui-orange), .2)',
          DEFAULT: 'rgba(var(--katui-orange), 1)',
          light: 'rgba(var(--katui-orange), .8)'
        },
        yellow: {
          accent: 'rgba(var(--katui-yellow), .2)',
          DEFAULT: 'rgba(var(--katui-yellow), 1)',
          light: 'rgba(var(--katui-yellow), .8)'
        },
        green: {
          accent: 'rgba(var(--katui-green), .2)',
          DEFAULT: 'rgba(var(--katui-green), 1)',
          light: 'rgba(var(--katui-green), .8)'
        },
        teal: {
          accent: 'rgba(var(--katui-teal), .2)',
          DEFAULT: 'rgba(var(--katui-teal), 1)',
          light: 'rgba(var(--katui-teal), .8)'
        },
        blue: {
          accent: 'rgba(var(--katui-blue), .2)',
          DEFAULT: 'rgba(var(--katui-blue), 1)',
          light: 'rgba(var(--katui-blue), .8)'
        },
        indigo: {
          accent: 'rgba(var(--katui-indigo), .2)',
          DEFAULT: 'rgba(var(--katui-indigo), 1)',
          light: 'rgba(var(--katui-indigo), .8)'
        },
        purple: {
          accent: 'rgba(var(--katui-purple), .2)',
          DEFAULT: 'rgba(var(--katui-purple), 1)',
          light: 'rgba(var(--katui-purple), .8)'
        },
        pink: {
          accent: 'rgba(var(--katui-pink), .2)',
          DEFAULT: 'rgba(var(--katui-pink), 1)',
          light: 'rgba(var(--katui-pink), .8)'
        },
        gray: {
          DEFAULT: 'var(--katui-gray-7)',
          1: 'var(--katui-gray-1)',
          2: 'var(--katui-gray-2)',
          3: 'var(--katui-gray-3)',
          4: 'var(--katui-gray-4)',
          5: 'var(--katui-gray-5)',
          6: 'var(--katui-gray-6)',
          7: 'var(--katui-gray-7)',
          8: 'var(--katui-gray-8)',
        }
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['active']
    },
  },
  plugins: [],
}
