/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4285F4',
        secondary: '#F4B400',
        accent: '#DB4437',
      },
    },
  },
  plugins: [],
};