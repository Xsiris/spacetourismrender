import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const TechnologyLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-h-screen overflow-y-hidden bg-cover bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop">
      <Navbar />
      <Outlet /> 
    </div>
  )
}

export default TechnologyLayout
