/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-rtl')],

  daisyui: {
    themes: [
      'black',
      'lemonade',
      'coffee',
      'pastel',

      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
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
