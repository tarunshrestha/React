import './App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Login from './components/Login'
// import About from './components/About'
import { Navbar, Home, Login, About, User, Layout } from './components';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
        { path:'/', element: <Layout><Home /></Layout> },
        { path: '/login', element: <Layout><Login /></Layout> },
        { path:'/about', element: <Layout><About /></Layout> },
        { path:'/user/:username', element: <Layout><User /></Layout> },

  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
