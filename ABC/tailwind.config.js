/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      backgroundImage: {
      'testbg': "url('./src/components/BackgroundPicture/background.png')"
    }
  },   
  },
  plugins: [],
}
