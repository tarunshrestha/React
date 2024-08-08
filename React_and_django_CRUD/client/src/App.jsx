import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input type="text" placeholder='Book Title...'></input>
        <input type="number" placeholder='Release Date...'></input>
        <button>Add Book</button>
      </div>
    </>
  )
  
}

export default App
