// tailwind.config.js
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        card: '#121316',
        accent: '#C7FF3F',
        mute: '#A1A1AA',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,.25)',
        ring: '0 0 0 8px rgba(199,255,63,.2)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container-std': {
          maxWidth: theme('maxWidth.6xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen md': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
        },
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.xl2'),
          paddingLeft: theme('spacing.5'),
          paddingRight: theme('spacing.5'),
          paddingTop: theme('spacing.3'),
          paddingBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.semibold'),
          transitionProperty: 'all',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.accent'),
          color: theme('colors.black'),
          '&:hover': {
            boxShadow: theme('boxShadow.ring'),
          },
        },
        '.btn-dark': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.15)',
          },
        },
        '.card': {
          borderRadius: theme('borderRadius.xl2'),
          boxShadow: theme('boxShadow.soft'),
          border: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: theme('colors.card'),
        },
        '.tag': {
          display: 'inline-flex',
          alignItems: 'center',
          borderRadius: '9999px',
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3'),
          paddingTop: theme('spacing.1'),
          paddingBottom: theme('spacing.1'),
          fontSize: theme('fontSize.sm')[0],
          fontWeight: theme('fontWeight.medium'),
          backgroundColor: theme('colors.accent'),
          color: theme('colors.black'),
        },
      })
    }),
  ],
}