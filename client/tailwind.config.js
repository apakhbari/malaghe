module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('tailwindcss-rtl'),
  ],

  daisyui: {
    themes: [
      'black',
      'lemonade',
      'coffee',
      'pastel',
      'retro',
      {
        darktheme: {
          primary: '#0284C7',
          secondary: '#1FD65F',
          accent: '#c1f5fe',
          neutral: '#110E0E',
          'base-100': '#737473',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        wireframe: {
          ...require('daisyui/src/colors/themes')['[data-theme=wireframe]'],
          primary: '#1b90cd',
          secondary: '#35da6f',
          'primary-content': 'white',
        },
        colors: {
          gold: '#BAA333',
          silver: '#c0c0c0',
        },
      },
    ],
  },
}
