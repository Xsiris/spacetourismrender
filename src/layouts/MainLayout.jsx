import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-home-mobile bg-cover">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
