import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function CrewLayout() {
  return (
    <div className="flex flex-col min-h-screen max-h-screen overflow-y-hidden bg-crew-mobile bg-cover">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CrewLayout
