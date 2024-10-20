import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DestinationLayout from './layouts/DestinationLayout'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import CrewLayout from './layouts/CrewLayout'
import CrewPage from './pages/CrewPage'
import TechnologyLayout from './layouts/TechnologyLayout'
import TechnologyPage from './pages/TechnologyPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/spacetourism" element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
        <Route element={<DestinationLayout />}>
          <Route path='/spacetourism/destination' element={<DestinationPage />} />
        </Route>
        <Route element={<CrewLayout />}>
          <Route path='/spacetourism/crew' element={<CrewPage />} />
        </Route>
        <Route element={<TechnologyLayout />}>
          <Route path='/spacetourism/technology' element={<TechnologyPage />} />
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
