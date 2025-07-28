/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom1265': '1265px',
         'xl2': '1007px',
      },
      
    },
  },
  plugins: [],
}