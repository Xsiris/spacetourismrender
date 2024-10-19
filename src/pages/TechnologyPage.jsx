import React from 'react'
import {useState} from 'react'
import vehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import vehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import capsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'

const TechnologyPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const changeTechnologySlide = function(e){
         // Change element styling to reflect newly selected destination option
         let parentUL = e.target.parentNode.parentNode.parentNode;
         //console.log("Parent: %o", parentUL);
         let technologyPages = parentUL.getElementsByTagName("a");
         //console.log("Parent: %o", technologyPages);
         let i = 0;
         for(let element of technologyPages){
            console.log("Working?");
            if(element === e.target.parentNode){
                console.log("Target found @: " + i);
                console.log("object %o", e.target);
                if(!e.target.nextElementSibling){
                    console.log("Clicked on circle");
                    console.log("Child: %o", technologyPages[currentSlide].children[0].nextElementSibling);
                    // Reset old pagination
                    technologyPages[currentSlide].children[0].nextElementSibling.classList.remove("bg-white");
                    technologyPages[currentSlide].children[0].classList.add("text-white");
                    technologyPages[currentSlide].children[0].nextElementSibling.classList.add("outline", "outline-white", "opacity-25");
                    // Set new pagination
                    e.target.classList.add("bg-white");
                    e.target.previousElementSibling.classList.remove("text-white");
                    e.target.previousElementSibling.classList.add("text-black");
                    e.target.classList.remove("outline", "outline-white", "opacity-25");
                    // Set new image
                    let technologyImage = document.getElementById("technology-image").getElementsByTagName("img");
                    technologyImage[currentSlide].classList.add("absolute", "invisible");
                    technologyImage[i].classList.remove("absolute", "invisible");
                    // Set new slide text
                    let technologyHeaderText = document.getElementById("technology-text").getElementsByTagName("h1");
                    let technologyDescriptionText = document.getElementById("technology-text").getElementsByTagName("p");
                    technologyHeaderText[currentSlide].classList.add("absolute", "invisible");
                    technologyHeaderText[i].classList.remove("absolute", "invisible");
                    technologyDescriptionText[currentSlide].classList.add("absolute", "invisible");
                    technologyDescriptionText[i].classList.remove("absolute", "invisible");
                }else{
                    console.log("Clicked on number");
                    // Reset old pagination
                    technologyPages[currentSlide].children[0].nextElementSibling.classList.remove("bg-white");
                    technologyPages[currentSlide].children[0].classList.add("text-white");
                    technologyPages[currentSlide].children[0].nextElementSibling.classList.add("outline", "outline-white", "opacity-25");
                    // Set new pagination
                    e.target.nextElementSibling.classList.add("bg-white");
                    e.target.classList.remove("text-white");
                    e.target.classList.add("text-black");
                    e.target.nextElementSibling.classList.remove("outline", "outline-white", "opacity-25");
                    // Set new image
                    let technologyImage = document.getElementById("technology-image").getElementsByTagName("img");
                    technologyImage[currentSlide].classList.add("absolute", "invisible");
                    technologyImage[i].classList.remove("absolute", "invisible");

                    // Set new slide text
                    let technologyHeaderText = document.getElementById("technology-text").getElementsByTagName("h1");
                    let technologyDescriptionText = document.getElementById("technology-text").getElementsByTagName("p");
                    technologyHeaderText[currentSlide].classList.add("absolute", "invisible");
                    technologyHeaderText[i].classList.remove("absolute", "invisible");
                    technologyDescriptionText[currentSlide].classList.add("absolute", "invisible");
                    technologyDescriptionText[i].classList.remove("absolute", "invisible");
                }
                setCurrentSlide(i);
            }else{

            }
            i++
        }
    }
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-center text-xl font-Barlow font-light text-white tracking-widest"><span className="opacity-25 pr-4 font-semibold">03</span>SPACE LAUNCH 101</h1>
      </div>
      <div id="technology-image" className="pt-10">
        <img className="w-full h-[322px]" src={vehiclePortrait} />
        <img className="absolute invisible w-full h-[322px]" src={spaceportPortrait} />
        <img className="absolute invisible w-full h-[322px]" src={capsulePortrait} />
      </div>
      <div className="pt-8 pb-10">
        <ul id="technology-slides" className="flex text-center items-center justify-center gap-16 text-white">
            <li className="relative flex items-center justify-center group"><a href="#" onClick={(e) => (changeTechnologySlide(e))}>
                <div className="absolute text-black z-10 left-0 top-0 -translate-x-1/2 translate-y-1/2">1</div>
                <div className="absolute left-0 top-0 -translate-x-1/2 bg-white rounded-full w-12 h-12 hover:opacity-100 group-hover:opacity-100"></div>
                </a>
            </li>
            <li className="relative flex items-center justify-center group"><a href="#" onClick={(e) => (changeTechnologySlide(e))}>
                <div className="absolute text-white z-10 left-0 top-0 -translate-x-1/2 translate-y-1/2">2</div>
                <div className="absolute left-0 top-0 -translate-x-1/2 outline outline-white opacity-25 rounded-full w-12 h-12 hover:opacity-100 group-hover:opacity-100"></div>
                </a>
            </li>
            <li className="relative flex items-center justify-center group"><a href="#" onClick={(e) => (changeTechnologySlide(e))}>
                <div className="absolute text-white z-10 left-0 top-0 -translate-x-1/2 translate-y-1/2">3</div>
                <div className="absolute left-0 top-0 -translate-x-1/2 outline outline-white opacity-25 rounded-full w-12 h-12 hover:opacity-100 group-hover:opacity-100"></div>
                </a>
            </li>
        </ul>
        <div className="h-12"></div>
      </div>
      <div id="technology-text" className="px-6 pb-6 flex flex-col text-center text-white">
        <h2 className="font-Bellefair text-2xl mb-2 opacity-50">THE TERMINOLOGY...</h2>
        <h1 className="font-Bellefair text-3xl">LAUNCH VEHICLE</h1>
        <h1 className="absolute invisible font-Bellefair text-3xl">SPACEPORT</h1>
        <h1 className="absolute invisible font-Bellefair text-3xl">SPACE CAPSULE</h1>
        <p className="pt-6 text-base text-spaceBlue-300 font-light">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
            it's quite an awe-inspiring sight on the launch pad!
        </p>
        <p className="absolute invisible pt-6 text-base text-spaceBlue-300 font-light">
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
            by analogy to the seaport for ships or airport for aircraft. Based in the 
            famous Cape Canaveral, our spaceport is ideally situated to take advantage 
            of the Earth’s rotation for launch.
        </p>
        <p className="absolute invisible pt-6 text-base text-spaceBlue-300 font-light">
            A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
            capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
            you'll spend your time during the flight. It includes a space gym, cinema, 
            and plenty of other activities to keep you entertained.
        </p>
      </div>
    </div>
  )
}

export default TechnologyPage