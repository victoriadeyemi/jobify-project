/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./dist/*.html",
  ],
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animate:{
        'bounce': 'bounce infinite',
        'animate-pulse': 'pulse no-repeat',
        bounce: {
          animaterepeat: 2,

        },
        pulse: {
          animaterepeat: 0,
          animateduration: 2,

        }
      }
    },
  },
  plugins: [],
}

