/* eslint-disable import/no-anonymous-default-export */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],

  theme: {
    extend: {
      colors:{
        "customFirst": "#EEEEEE",
        "custBrown":"#F7C986",
        "lightBrown":"#ECE7DE",
        "bluerry":"#064A7B",
        "fonts":"#494747",
        "log":"#064A7B",
        "need":"#565454",
        "subject":"#EEF8FF",
        "darkerblue":"#051059",
        "darkenblue":"#081A8C",
        "blueblue":"#0A88E1"
      },
      screens:{
        'xs': "350px",
        'xx':"250px"
      },
      height: {
        '10vh':'10vh',
        '5vh':'5vh',
        '8vh':'8vh',
        '20vh':'20vh',
        '50vh':'50vh',
        '70vh':'70vh',
        '80vh':'80vh',
        '90vh':'90vh',
        '100vh':'100vh',
        '30vh':'30vh',
        '40vh':'40vh',
        '60vh':'60vh',
        '50%':'50%',
        '120vh':'120vh',
        '70%':'70%',
        '40%':'40%',
        '15vh':'15vh'
        
      },
      width:{
        '30vw':'30wh',
        '50vw':'50wh',
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "RobotoCondensed": ["RobotoCondensed", "sans-serif"],
        'Lexend':['Lexend','sans-serif'],
        'kanit':["Kanit", 'sans-serif']
      },
      animation:{
        'slide':'slide 20s infinite linear alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes:{
        slide:{
          from: {
            transform: 'translateX(0%)'
          },
          to:{
            transform: 'translateX(100%)'
          }
        },
        form: {
          from: {
            width: '0px'
          },
          to: {
            width: "100px"
          }
        }
      },
    },
  },
  plugins: [flowbite.plugin()],
}

