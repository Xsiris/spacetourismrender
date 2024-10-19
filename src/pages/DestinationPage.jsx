import React from 'react'
import {useState} from 'react'
import moon from '../assets/destination/image-moon.webp'
import mars from '../assets/destination/image-mars.webp'
import europa from '../assets/destination/image-europa.webp'
import titan from '../assets/destination/image-titan.webp'

const DestinationPage = () => {
  const [currDestination, setCurrDestination] = useState('MOON');
  const [destinations, setdestinations] = useState(['MOON', 'MARS', 'EUROPA', 'TITAN']);
  const setNewDestination = function(e){
    e.preventDefault();
    if(currDestination == e.target.innerHTML){
      //console.log(e.target.innerHTML + ' already selected!')
    }else{
      //console.log("Setting: " + currDestination + " to " + e.target.innerHTML + "...");

      // Change element styling to reflect newly selected destination option
      let parentUL = e.target.parentNode.parentNode;
      //console.log("Parent: %o", parentUL);
      let anchorTags = parentUL.getElementsByTagName("a");
      //console.log("Anchors: %o", anchorTags);
      for(let element of anchorTags){
        if(element.innerHTML === currDestination){
          element.classList.remove("text-white", "pb-2", "border-b-2", "border-white");
          element.classList.add("hover:text-white", "hover:border-spaceTransparentWhite", "hover:pb-2", "hover:border-b-2");
        }else if(element.innerHTML === e.target.innerHTML){
          element.classList.remove("hover:text-white", "hover:border-spaceTransparentWhite", "hover:pb-2", "hover:border-b-2");
          element.classList.add("text-white", "pb-2", "border-b-2", "border-white");
        }
      };

      //Update view to reflect currently selected destination
      let prevDestinationPlanetImg = document.getElementById(currDestination.toLowerCase()); // currDestiunation returns the old destination e.target.innerHTML returns new dest
      let currDestinationPlanetImg = document.getElementById(e.target.innerHTML.toLowerCase());

      let prevDestinationHeader = document.getElementById(currDestination.toLowerCase() + "-header"); // currDestiunation returns the old destination e.target.innerHTML returns new dest
      let currDestinationHeader = document.getElementById(e.target.innerHTML.toLowerCase() + "-header");

      let prevDestinationDescription = document.getElementById(currDestination.toLowerCase() + "-description"); // currDestiunation returns the old destination e.target.innerHTML returns new dest
      let currDestinationDescription = document.getElementById(e.target.innerHTML.toLowerCase() + "-description");

      let prevDestinationDistance = document.getElementById(currDestination.toLowerCase() + "-distance"); // currDestiunation returns the old destination e.target.innerHTML returns new dest
      let currDestinationDistance = document.getElementById(e.target.innerHTML.toLowerCase() + "-distance");

      let prevDestinationTravelTime = document.getElementById(currDestination.toLowerCase() + "-travel-time"); // currDestiunation returns the old destination e.target.innerHTML returns new dest
      let currDestinationTravelTime = document.getElementById(e.target.innerHTML.toLowerCase() + "-travel-time");

      switch(e.target.innerHTML){
        case 'MOON':
          console.log("Updating view to MOON");
          //Update Image
          prevDestinationPlanetImg.classList.remove("opacity-100");
          prevDestinationPlanetImg.classList.add("opacity-0", "absolute");

          currDestinationPlanetImg.classList.remove("absolute", "opacity-0");
          currDestinationPlanetImg.classList.add("opacity-100");
          //Update header text
          prevDestinationHeader.classList.remove("opacity-100");
          prevDestinationHeader.classList.add("opacity-0", "absolute");
          
          currDestinationHeader.classList.remove("absolute", "opacity-0");
          currDestinationHeader.classList.add("opacity-100");

          // Update description text
          prevDestinationDescription.classList.remove("opacity-100");
          prevDestinationDescription.classList.add("opacity-0", "absolute", "top-0");

          currDestinationDescription.classList.remove("absolute", "opacity-0");
          currDestinationDescription.classList.add("opacity-100");

          // Update distance text
          prevDestinationDistance.classList.remove("opacity-100");
          prevDestinationDistance.classList.add("opacity-0", "absolute", "left-1/2", "-translate-x-1/2");

          currDestinationDistance.classList.remove("absolute", "opacity-0");
          currDestinationDistance.classList.add("opacity-100");

          // Update travel time text
          prevDestinationTravelTime.classList.remove("opacity-100");
          prevDestinationTravelTime.classList.add("opacity-0", "absolute");

          currDestinationTravelTime.classList.remove("absolute", "opacity-0");
          currDestinationTravelTime.classList.add("opacity-100");
          break;
        case 'MARS':
          console.log("Updating view to MARS");
          //Update Image
          prevDestinationPlanetImg.classList.remove("opacity-100");
          prevDestinationPlanetImg.classList.add("opacity-0", "absolute");

          currDestinationPlanetImg.classList.remove("absolute", "opacity-0");
          currDestinationPlanetImg.classList.add("opacity-100");
          //Update header text
          prevDestinationHeader.classList.remove("opacity-100");
          prevDestinationHeader.classList.add("opacity-0", "absolute");
          
          currDestinationHeader.classList.remove("absolute", "opacity-0");
          currDestinationHeader.classList.add("opacity-100");

          // Update description text
          prevDestinationDescription.classList.remove("opacity-100");
          prevDestinationDescription.classList.add("opacity-0", "absolute", "top-0");

          currDestinationDescription.classList.remove("absolute", "opacity-0");
          currDestinationDescription.classList.add("opacity-100");

          // Update distance text
          prevDestinationDistance.classList.remove("opacity-100");
          prevDestinationDistance.classList.add("opacity-0", "absolute", "left-1/2", "-translate-x-1/2");

          currDestinationDistance.classList.remove("absolute", "opacity-0");
          currDestinationDistance.classList.add("opacity-100");

          // Update travel time text
          prevDestinationTravelTime.classList.remove("opacity-100");
          prevDestinationTravelTime.classList.add("opacity-0", "absolute");

          currDestinationTravelTime.classList.remove("absolute", "opacity-0");
          currDestinationTravelTime.classList.add("opacity-100");
          break;
        case 'EUROPA':
          console.log("Updating view to EUROPA");
          //Update Image
          prevDestinationPlanetImg.classList.remove("opacity-100");
          prevDestinationPlanetImg.classList.add("opacity-0", "absolute");

          currDestinationPlanetImg.classList.remove("absolute", "opacity-0");
          currDestinationPlanetImg.classList.add("opacity-100");
          //Update header text
          prevDestinationHeader.classList.remove("opacity-100");
          prevDestinationHeader.classList.add("opacity-0", "absolute");
          
          currDestinationHeader.classList.remove("absolute", "opacity-0");
          currDestinationHeader.classList.add("opacity-100");

          // Update description text
          prevDestinationDescription.classList.remove("opacity-100");
          prevDestinationDescription.classList.add("opacity-0", "absolute", "top-0");

          currDestinationDescription.classList.remove("absolute", "opacity-0");
          currDestinationDescription.classList.add("opacity-100");

          // Update distance text
          prevDestinationDistance.classList.remove("opacity-100");
          prevDestinationDistance.classList.add("opacity-0", "absolute", "left-1/2", "-translate-x-1/2");

          currDestinationDistance.classList.remove("absolute", "opacity-0");
          currDestinationDistance.classList.add("opacity-100");

          // Update travel time text
          prevDestinationTravelTime.classList.remove("opacity-100");
          prevDestinationTravelTime.classList.add("opacity-0", "absolute");

          currDestinationTravelTime.classList.remove("absolute", "opacity-0");
          currDestinationTravelTime.classList.add("opacity-100");
          break;
        case 'TITAN':
          console.log("Updating view to TITAN");
          //Update Image
          prevDestinationPlanetImg.classList.remove("opacity-100");
          prevDestinationPlanetImg.classList.add("opacity-0", "absolute");

          currDestinationPlanetImg.classList.remove("absolute", "opacity-0");
          currDestinationPlanetImg.classList.add("opacity-100");
          //Update header text
          prevDestinationHeader.classList.remove("opacity-100");
          prevDestinationHeader.classList.add("opacity-0", "absolute");
          
          currDestinationHeader.classList.remove("absolute", "opacity-0");
          currDestinationHeader.classList.add("opacity-100");

          // Update description text
          prevDestinationDescription.classList.remove("opacity-100");
          prevDestinationDescription.classList.add("opacity-0", "absolute", "top-0");

          currDestinationDescription.classList.remove("absolute", "opacity-0");
          currDestinationDescription.classList.add("opacity-100");

          // Update distance text
          prevDestinationDistance.classList.remove("opacity-100");
          prevDestinationDistance.classList.add("opacity-0", "absolute", "left-1/2", "-translate-x-1/2");

          currDestinationDistance.classList.remove("absolute", "opacity-0");
          currDestinationDistance.classList.add("opacity-100");

          // Update travel time text
          prevDestinationTravelTime.classList.remove("opacity-100");
          prevDestinationTravelTime.classList.add("opacity-0", "absolute");

          currDestinationTravelTime.classList.remove("absolute", "opacity-0");
          currDestinationTravelTime.classList.add("opacity-100");
          break;
      }

      
      // Update useState to newly selected destination item
      console.log("FINISHED");
      setCurrDestination(e.target.innerHTML);
    }
    //console.log(e);
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-center text-xl font-Barlow font-light text-white tracking-widest"><span className="opacity-25 pr-4 font-semibold">01</span>PICK YOUR DESTINATION</h1>
      </div>
      <div id="veiw-planet-images" className="flex items-center justify-center py-6 mb-8">
        <img id="moon" className="transition-all ease-in-out duration-500 opacity-100 object-scale-down w-36 h-36" src={ moon } />
        <img id="mars" className="transition-all ease-in-out duration-500 absolute opacity-0 object-scale-down w-36 h-36" src={ mars } />
        <img id="europa" className="transition-all ease-in-out duration-500 absolute opacity-0 object-scale-down w-36 h-36" src={ europa } />
        <img id="titan" className="transition-all ease-in-out duration-500 absolute opacity-0 object-scale-down w-36 h-36" src={ titan } />
      </div>
      <div className="mb-6 pb-2">
        <ul className="text-spaceBlue-300 text-base tracking-wider font-Barlow flex gap-7 items-center justify-center">
          <li><a href="#" onClick={(e) =>(setNewDestination(e))} className="transition-all ease-in-out duration-300 text-white pb-2 border-b-2 border-white">MOON</a></li>
          <li><a href="#" onClick={(e) =>(setNewDestination(e))} className="transition-all ease-in-out duration-300 hover:text-white border-spaceTransparentWhite pb-2 hover:border-b-2">MARS</a></li>
          <li><a href="#" onClick={(e) =>(setNewDestination(e))} className="transition-all ease-in-out duration-300 hover:text-white border-spaceTransparentWhite pb-2 hover:border-b-2">EUROPA</a></li>
          <li><a href="#" onClick={(e) =>(setNewDestination(e))} className="transition-all ease-in-out duration-300 hover:text-white border-spaceTransparentWhite pb-2 hover:border-b-2">TITAN</a></li>
        </ul>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <h1 id="moon-header" className="transition-all ease-in-out duration-500 text-white opacity-100 font-Bellefair text-6xl leading-[114.6%]">MOON</h1>
        <h1 id="mars-header" className="transition-all ease-in-out duration-500 absolute opacity-0  text-white font-Bellefair text-6xl leading-[114.6%]">MARS</h1>
        <h1 id="europa-header" className="transition-all ease-in-out duration-500 absolute opacity-0  text-white font-Bellefair text-6xl leading-[114.6%]">EUROPA</h1>
        <h1 id="titan-header" className="transition-all ease-in-out duration-500 absolute opacity-0  text-white font-Bellefair text-6xl leading-[114.6%]">TITAN</h1>
      </div>
      <div className="relative">
        <p id="moon-description" className="transition-all ease-in-out duration-500 opacity-100 text-spaceBlue-300 font-light text-center font-Barlow text-lg leading-[180%]">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
          regain perspective and come back refreshed. While you’re there, take in some history 
          by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <p id="mars-description" className="transition-all ease-in-out duration-500 absolute top-0 opacity-0 text-spaceBlue-300 font-light text-center font-Barlow text-lg leading-[180%]">
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
          the tallest planetary mountain in our solar system. It’s two and a half times 
          the size of Everest!
        </p>
        <p id="europa-description" className="transition-all ease-in-out duration-500 absolute top-0 opacity-0 text-spaceBlue-300 font-light text-center font-Barlow text-lg leading-[180%]">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
          winter lover’s dream. With an icy surface, it’s perfect for a bit of 
          ice skating, curling, hockey, or simple relaxation in your snug 
          wintery cabin.
        </p>
        <p id="titan-description" className="transition-all ease-in-out duration-500 absolute top-0 opacity-0 text-spaceBlue-300 font-light text-center font-Barlow text-lg leading-[180%]">
          The only moon known to have a dense atmosphere other than Earth, Titan 
          is a home away from home (just a few hundred degrees colder!). As a 
          bonus, you get striking views of the Rings of Saturn.
        </p>
      </div>
      <div className="my-6">
        <hr className="border-spaceTransparentWhite" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-6">
          <h2 className="mb-3 text-base font-Barlow text-spaceBlue-300 tracking-wider">AVG. DISTANCE</h2>
          <span id="moon-distance" className="transition-all ease-in-out duration-500 left-1/2 -translate-x-1/2 text-white opacity-100 text-2xl font-Bellefair font-light">384,400 KM</span>
          <span id="mars-distance" className="transition-all ease-in-out duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 text-white text-2xl font-Bellefair font-light">225 MIL. KM</span>
          <span id="europa-distance" className="transition-all ease-in-out duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 text-white text-2xl font-Bellefair font-light">628 MIL. KM</span>
          <span id="titan-distance" className="transition-all ease-in-out duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 text-white text-2xl font-Bellefair font-light">1.6 BIL. KM</span>
        </div>
        <div>
          <div className="text-center">
            <h2 className="mb-3 text-base font-Barlow text-spaceBlue-300 tracking-wider">EST. TRAVEL TIME</h2>
            <span id="moon-travel-time" className="transition-all ease-in-out duration-500 left-1/2 -translate-x-1/2 text-white opacity-100 text-2xl font-Bellefair font-light">3 DAYS</span>
            <span id="mars-travel-time" className="transition-all ease-in-out duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 text-white text-2xl font-Bellefair font-light">9 MONTHS</span>
            <span id="europa-travel-time" className="transition-all ease-in-out duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 text-white text-2xl font-Bellefair font-light">3 YEARS</span>
            <span id="titan-travel-time" className="transition-all ease-in-out duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 text-white text-2xl font-Bellefair font-light">7 YEARS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage
