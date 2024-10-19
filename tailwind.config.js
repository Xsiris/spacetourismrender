/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "spaceBlue-900" : "#0B0D17",
        "spaceBlue-300" : "#D0D6F9",
        "spaceTransparentWhite" : "rgba(255, 255, 255, 0.25)"
      },
      backgroundImage:{
        'home-mobile' : "url('/src/assets/home/background-home-mobile.jpg')",
        'home-tablet' : "url('/src/assets/home/background-home-tablet.jpg')",
        'home-desktop' : "url('/src/assets/home/background-home-desktop.jpg')",
        'destination-mobile' : "url('/src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet' : "url('/src/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop' : "url('/src/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile' : "url('/src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet' : "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop' : "url('/src/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile' : "url('/src/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet' : "url('/src/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop' : "url('/src/assets/technology/background-technology-desktop.jpg')"
      }
    },
    fontFamily: {
      "Bellefair" : ['Bellefair'],
      "Barlow" : ["Barlow Condensed"]
    }
  },
  plugins: [],
}

