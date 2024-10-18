import React from 'react'
import logo from '../assets/shared/logo.svg'
import iconHamburger from '../assets/shared/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6">
        <div>
          <a href="#">
            <img src={ logo } />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={ iconHamburger } />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
