import { useState } from "react";
import CanvasModel from "./canvas/index"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"


function App() {
    const [selectedItem, setSelectedItem] = useState('tshirt'); // 'tshirt' or 'mug'


  return (
    <>
      <Home />

      <div className="flex gap-4 p-4 z-50 relative">
        <button
          onClick={() => setSelectedItem('tshirt')}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${
            selectedItem === 'tshirt' ? 'ring-2 ring-yellow-400' : ''
          }`}
        >
          T-Shirt
        </button>

        <button
          onClick={() => setSelectedItem('mug')}
          className={`px-4 py-2 rounded bg-green-500 text-white ${
            selectedItem === 'mug' ? 'ring-2 ring-yellow-400' : ''
          }`}
        >
          Mug
        </button>
    </div>

      <CanvasModel selected={selectedItem} />
      <Customizer selected={selectedItem} />
    </>
  )
}

export default App
