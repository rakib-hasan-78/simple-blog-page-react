/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        serif: ['"Exo 2"', 'serif'],
      }
    },
    screens: {
      xxs: '20rem',
      xs: '21.875rem',
      sm: '28.125rem',
      md:'47.9375rem',
      lg:'63.75rem',
      xl:'80rem',
      xxl:'90rem',
      '2xl' : '96rem' 

    }
  },
  plugins: [],
}