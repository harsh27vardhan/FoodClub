import './App.css'
import Login from './components/auth/Login'
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './components/auth/Signup'
import RestroHome from './RestroHome'
import UserPage from './UserPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/restropage",
      element: <RestroHome />
    },
    {
      path: "/userpage",
      element: <UserPage />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
