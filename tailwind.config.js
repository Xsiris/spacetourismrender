/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "spaceBlue-900" : "#0B0D17",
        "spaceBlue-300" : "#D0D6F9"
      },
      backgroundImage:{
        'home-mobile' : "url('/src/assets/home/background-home-mobile.jpg')",
        'home-tablet' : "url('/src/assets/home/background-home-tablet.jpg')",
        'home-desktop' : "url('/src/assets/home/background-home-desktop.jpg')"
      }
    },
    fontFamily: {
      "Bellefair" : ['Bellefair'],
      "Barlow" : ["Barlow Condensed"]
    }
  },
  plugins: [],
}

