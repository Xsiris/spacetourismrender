import { useState } from 'react'
import {Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DestinationLayout from './layouts/DestinationLayout'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import CrewLayout from './layouts/CrewLayout'
import CrewPage from './pages/CrewPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
        <Route element={<DestinationLayout />}>
          <Route path='/destination' element={<DestinationPage />} />
        </Route>
        <Route element={<CrewLayout />}>
          <Route path='/crew' element={<CrewPage />} />
        </Route>
      </>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
