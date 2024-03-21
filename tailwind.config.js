/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
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
