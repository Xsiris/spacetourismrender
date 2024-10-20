import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DestinationLayout = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-scroll bg-destination-mobile bg-cover md:bg-destination-tablet">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default DestinationLayout