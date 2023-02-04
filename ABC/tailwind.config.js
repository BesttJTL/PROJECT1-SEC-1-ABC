/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      backgroundImage: {
      'background': "url('./src/components/BackgroundPicture/background.png')"
      ,'boxtext':"url('./src/components/UIButton/question.png')"
    }
  },   
  },
  plugins: [],
}
