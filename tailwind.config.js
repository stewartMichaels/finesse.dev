/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'kodemono': ['Kode Mono', 'monospace']
    },
    extend: {
      colors: {
        'primary': '#189AB4', // Blue Grotto :#189AB4
        'primary-hover': "#05445E", // Navy Blue : #05445E
        'baby-blue': "#D4F1F4", // Baby Blue : #D4F1F4
        'blue-green': '#75E6DA', // Blue Green : #75E6DA
      }
    },

  },
  plugins: [],
}