import React from 'react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu(e){
    const menu = document.getElementById('menu');
    if(isMenuOpen){
      menu.classList.add("invisible");
    }else{
      menu.classList.remove("invisible");
    }
    setIsMenuOpen(!isMenuOpen);
  }

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
        <div id="menu" className="invisible absolute w-2/3 h-full bottom-0 right-0 backdrop-blur-xl z-20">
          <div className="relative p-8">
            <div className="mb-12 flex justify-end">
              <a href="#" onClick={toggleMenu}><img src={iconClose} className="" /></a>
            </div>
            <div>
              <ul className="flex flex-col gap-8 text-white">
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">01</span>
                  <NavLink to="/" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">HOME</NavLink>
                  <div className="invisible absolute h-full -right-8 top-0 border-white border-r-4 peer-hover:visible"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">02</span>
                  <NavLink to="/destination" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">DESTINATION</NavLink>
                  <div className="invisible absolute h-full -right-8 top-0 border-white border-r-4 peer-hover:visible"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">03</span>
                  <NavLink to="/crew" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">CREW</NavLink>
                  <div className="invisible absolute h-full -right-8 top-0 border-white border-r-4 peer-hover:visible"></div>
                </li>
                <li className="relative">
                  <span className="text-white text-xl pr-4 tracking-wider">04</span>
                  <NavLink to="/technology" href="#" className="text-center text-xl font-Barlow font-light text-white tracking-widest peer">TECHNOLOGY</NavLink>
                  <div className="invisible absolute h-full -right-8 top-0 border-white border-r-4 peer-hover:visible"></div>
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
