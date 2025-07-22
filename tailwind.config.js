/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        'custom': '0px 4px 8px 0px rgba(171, 190, 209, 0.4)',
      },
      screens: {
        'custom1265': '1265px',
         'xl2': '1007px',
      },
      
    },
  },
  plugins: [],
}