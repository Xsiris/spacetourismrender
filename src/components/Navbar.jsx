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
    switch(pathname){
      case "/":
        menuHighlighterDivs[0].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
      case "/destination":
        menuHighlighterDivs[1].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
      case "/crew":
        menuHighlighterDivs[2].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
      case "/technology":
        menuHighlighterDivs[3].classList.remove("opacity-0", "opacity-50", "peer-hover:visible", "invisible", "transition-all", "ease-in-out", "duration-500", "peer-hover:opacity-50");
        break;
    }
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center p-6">
        <div>
          <NavLink to="/" href="#">
            <img src={ logo } />
          </NavLink>
        </div>
        <div>
          <a href="#" onClick={toggleMenu}>
            <img src={ iconHamburger } />
          </a>
        </div>
        <div id="menu" className="transition-all ease-in-out duration-1000 absolute w-2/3 h-full bottom-0 -right-2/3 backdrop-blur-xl z-20">
          <div className="relative p-8">
            <div className="mb-12 flex justify-end">
              <a href="#" onClick={toggleMenu}><img src={iconClose} className="" /></a>
            </div>
            <div>
              <ul id="menu-ul" className="flex flex-col gap-8 text-white">
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">01</span>
                  <NavLink to="/" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">HOME</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">02</span>
                  <NavLink to="/destination" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">DESTINATION</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">03</span>
                  <NavLink to="/crew" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">CREW</NavLink>
                  <div className="transition-all ease-in-out duration-500 absolute h-full -right-8 top-0 border-white opacity-0 border-r-4 peer-hover:opacity-50"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">04</span>
                  <NavLink to="/technology" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">TECHNOLOGY</NavLink>
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
