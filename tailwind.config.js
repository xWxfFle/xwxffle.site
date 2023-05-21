module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5ca31f',

          secondary: '#5880bc',

          accent: '#dfe881',

          neutral: '#281D2A',

          'base-100': '#337755',

          info: '#6AA0EC',

          success: '#27AA64',

          warning: '#D8B818',

          error: '#E67870',
        },
      },
    ],
  },
}
