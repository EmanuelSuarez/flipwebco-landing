/** @type {import('tailwindcss').Config} */
module.exports = {
  

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./img/bg.svg') ",
        'hero-md': "url('./img/bg-md.svg')",
        'hero-lg': "url('./img/bg-lg.svg')",
        'hero-xl': "url('./img/bg-xl.svg')",
        'hero-mobile': "url('./img/bg-mobile.svg')"
      },
      boxShadow: {
        '3xl': '100px 350px 600px -15px rgba(0, 0, 0, 0.3)',
      } 
  },
  },
  plugins: [require('flowbite/plugin')],


}