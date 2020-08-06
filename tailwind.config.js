const sm = '360px'
const md = '720px'
const lg = '1440px'

module.exports = {
  purge: [
    'src/*.js',
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
  theme: {
    screens: { sm, md, lg },
    extend: {
      width: { sm, md, lg },
      minWidth: theme => ({
        auto: 'auto',
        ...theme('spacing'),
      }),
      colors: {
        'matisse-red': {
          100: '#FF6356',
          200: '#E84234',
          300: '#C72A27',
          400: '#7B1F22',
        },
        copper: {
          100: '#FBD7B7',
          200: '#EABF9A',
          300: '#C9A17E',
          400: '#AB855E',
        },
        'scout-green': {
          100: '#A4A16E',
          200: '#788D5E',
          300: '#58623F',
          400: '#34483C',
        },
        'lichen-green': {
          100: '#BFF5DC',
          200: '#B1E9CF',
          300: '#88B6B3',
          400: '#478F8B',
        },
        'matisse-blue': {
          100: '#7697FF',
          200: '#5D77C7',
          300: '#435691',
          400: '#131C25',
        },
        'calico-orange': {
          100: '#FFC29F',
          200: '#E79669',
          300: '#DE7539',
          400: '#D85C16',
        },
        'gray-pink': {
          100: '#FFF4F3',
          200: '#CAB4B2',
          300: '#998381',
          400: '#423837',
        },
        'gray-yellow': {
          100: '#FFFAF3',
          200: '#C7BAA9',
          300: '#7D7569',
          400: '#3E3A35',
        },
        'gray-red': {
          100: '#FFFAF3',
          200: '#CDC4B9',
          300: '#BBB0A',
          400: '#6C5D5B',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  variants: {},
  plugins: [],
}
