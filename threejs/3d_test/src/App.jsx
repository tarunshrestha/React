import { useState } from "react";
import CanvasModel from "./canvas/index"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from "./components";
import Shirt from "./canvas/Shirt";
import Mug from "./canvas/Mug";

function App() {
    // const [selectedItem, setSelectedItem] = useState('tshirt'); // 'tshirt' or 'mug'

    const router = createBrowserRouter([
      { path: '/', element: <Layout><Home /></Layout> },
      { path: '/shirt', element: <Layout><CanvasModel selected={'tshirt'}/><Customizer selected={'tshirt'} /> </Layout> },
      { path: '/mug', element: <Layout><CanvasModel selected={'mug'}/><Customizer selected={'mug'} /></Layout> },
      // { path: '/about', element: <Layout><About /></Layout> },
      // { path: '/contact', element: <Layout><Contact /></Layout> },
    ]);


  return (
    <>
      <RouterProvider router={router} />

      {/* <Home /> */}

      {/* <CanvasModel selected={selectedItem} />
      <Customizer selected={selectedItem} /> */}
    </>
  )
}

export default App
