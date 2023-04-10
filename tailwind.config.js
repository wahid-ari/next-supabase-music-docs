/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./theme.config.tsx",
    "./styles/globals.css",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}