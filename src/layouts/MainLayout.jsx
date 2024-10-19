import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-clip bg-home-mobile bg-cover">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
