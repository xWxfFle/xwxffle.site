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
          primary: '#176D56',

          secondary: '#d1861d',

          accent: '#f9c99f',

          neutral: '#1D2135',

          'base-100': '#1C8259',

          info: '#1D2135',

          success: '#b7e064',

          warning: '#F4B857',

          error: '#F83A76',
        },
      },
    ],
  },
}
