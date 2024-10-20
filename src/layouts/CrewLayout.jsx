import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function CrewLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-scroll overflow-y-hidden bg-cover bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CrewLayout
