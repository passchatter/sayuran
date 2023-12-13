/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    container:{
      center:true,
      padding:"1rem"
    },
    extend: {
      screens:{
        lg:"1124px",
        xl:"1224px"
      },
      backgroundImage : {
        'hero': "url(img/hero.jpg)",
      },
      fontFamily:{
        'bodyfont': ['Raleway', 'sans-seri'],
        'dancing' : ['Dancing Script', 'cursive'],
        'title' : ['Rubik', 'sans-serif']
      },
      colors:{
        'title':'#05081E',
        
      }
    },
  },
  plugins: [],
}

