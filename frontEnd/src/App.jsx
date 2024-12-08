import './App.css'
import Login from './Login'
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './Signup'

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
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
