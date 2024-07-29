import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  return (
  <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <br></br>
        <input type="text" id="item" />
      </div>
      <button className='btn'>Add</button>
    </form>

    <h1 className=''>TodoList</h1>
    <ul className='list'>
      <li>  
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className='"btn btn-danger'>Delete</button>
      </li>

      <li>  
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className='"btn btn-danger'>Delete</button>
      </li>
    </ul>
  </>
)
}
