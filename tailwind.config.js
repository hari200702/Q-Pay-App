/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qpay-green': '#437a4b', // Adjust this to match your exact green
      }
    },
  },
  plugins: [],
}