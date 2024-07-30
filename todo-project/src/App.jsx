import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos(currentTodos => {
      return  [
          ...currentTodos, 
          {
        id: crypto.randomUUID(),
        title: newItem, 
        completed : false
        },
      ] 
    })

  }
  return (
  <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <br></br>
        <input value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className='btn'>Add</button>
    </form>

    <h1 className=''>TodoList</h1>
    <ul className='list'>
      {todos.map(todo => {
        return (
        <li>  
        <label>
          <input type="checkbox" checked={todo.completed} />
          {todo.title}
        </label>
        <button className='"btn btn-danger'>Delete</button>
      </li>

      )
      })}
      
    </ul>
  </>
)
}
