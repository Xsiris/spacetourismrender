import React from 'react'
import {useState, useEffect} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { hash, pathname, search } = location;

  function toggleMenu(e){
    const menu = document.getElementById('menu');
    if(isMenuOpen){
      menu.classList.remove("right-0");
      menu.classList.add("-right-2/3");
    }else{
      menu.classList.remove("-right-2/3");
      menu.classList.add("right-0");
    }
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    let menuHighlighterDivs = document.getElementById("menu-ul").getElementsByTagName("div");
    let menuMdHighlighterDivs = document.getElementById("menu-md-ul").getElementsByTagName("div");
    switch(pathname){
      case "/spacetourism":
        menuHighlighterDivs[0].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        menuMdHighlighterDivs[0].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
      case "/spacetourism/destination":
        menuHighlighterDivs[1].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        menuMdHighlighterDivs[1].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
      case "/spacetourism/crew":
        menuHighlighterDivs[2].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        menuMdHighlighterDivs[2].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
      case "/spacetourism/technology":
        menuHighlighterDivs[3].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        menuMdHighlighterDivs[3].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
    }
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center md:items-stretch xl:pt-10">
        <div className="relative p-6 md:flex-shrink md:px-10 lg:flex-grow-5">
          <hr className="border-spaceTransparentWhite absolute z-10 w-10/12 top-1/2 -right-10 hidden lg:block" />
          <div className="lg:flex">
          <NavLink to="/spacetourism" href="#">
            <img src={ logo } />
          </NavLink>
          </div>
        </div>
        <div className="p-6 md:hidden">
          <a href="#" onClick={toggleMenu}>
            <img src={ iconHamburger } />
          </a>
        </div>
        <div className="hidden bg-spaceMoreTransparentWhite md:p-6 md:pl-0 md:flex md:items-center md:flex-grow md:justify-end xl:flex-grow-2 xl:backdrop-blur-xl">
          <ul id="menu-md-ul" className="hidden md:flex gap-8 text-white">
            <li class="relative">
              <NavLink to="/spacetourism" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer md:font-thin md:text-lg">
                <span className="text-white text-xl pr-4 tracking-wider md:text-lg md:font-light">00</span>
                HOME
              </NavLink>
              <div class="transition-all ease-in-out duration-500 absolute w-full right-0 -bottom-8 border-white opacity-0 border-b-4 peer-hover:opacity-50"></div>
            </li>
            <li class="relative">
              <NavLink to="/spacetourism/destination" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer md:font-thin md:text-lg">
                <span className="text-white text-xl pr-4 tracking-wider md:text-lg md:font-light">01</span>
                DESTINATION
              </NavLink>
              <div class="transition-all ease-in-out duration-500 absolute w-full right-0 -bottom-8 border-white opacity-0 border-b-4 peer-hover:opacity-50"></div>
            </li>
            <li class="relative">
              <NavLink to="/spacetourism/crew" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer md:font-thin md:text-lg">
                <span className="text-white text-xl pr-4 tracking-wider md:text-lg md:font-light">02</span>
                CREW
              </NavLink>
              <div class="transition-all ease-in-out duration-500 absolute w-full right-0 -bottom-8 border-white opacity-0 border-b-4 peer-hover:opacity-50"></div>
            </li>
            <li class="relative">
              <NavLink to="/spacetourism/technology" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer md:font-thin md:text-lg">
                <span className="text-white text-xl pr-4 tracking-wider md:text-lg md:font-light">03</span>
                TECHNOLOGY
              </NavLink>
              <div class="transition-all ease-in-out duration-500 absolute w-full right-0 -bottom-8 border-white opacity-0 border-b-4 peer-hover:opacity-50"></div>
            </li>
          </ul>
        </div>
        <div id="menu" className="transition-all ease-in-out duration-1000 absolute w-2/3 h-full bottom-0 -right-2/3 backdrop-blur-xl z-20">
          <div className="relative p-8">
            <div className="mb-12 flex justify-end">
              <a href="#" onClick={toggleMenu}><img src={iconClose} className="" /></a>
            </div>
            <div>
              <ul id="menu-ul" className="flex flex-col gap-8 text-white">
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">00</span>
                  <NavLink to="/spacetourism" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">HOME</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">01</span>
                  <NavLink to="/spacetourism/destination" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">DESTINATION</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">02</span>
                  <NavLink to="/spacetourism/crew" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">CREW</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">03</span>
                  <NavLink to="/spacetourism/technology" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">TECHNOLOGY</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
