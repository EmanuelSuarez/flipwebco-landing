/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./img/bg.svg')",
        'hero-md': "url('./img/bg-md.svg')",
        'hero-lg': "url('./img/bg-lg.svg')",
        'hero-xl': "url('./img/bg-xl.svg')",
      },
  },
  },
  plugins: [],
}