/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'xxs': '30px', // Custom font size
      'xxl': '22px',
    },
  },
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        slideInOut: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
        slideInOut: 'slideInOut 5s ease-in-out infinite',
        zoomInOut: 'zoomInOut 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  
}