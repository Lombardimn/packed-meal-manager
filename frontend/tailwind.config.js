/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'secondary': '#dedede',
        'accent-danger': '#da2735',
        'danger': '#7f1d1d',
      }
    },
  },
  plugins: [],
}
