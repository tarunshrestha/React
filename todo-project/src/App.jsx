import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return  [
          ...currentTodos, 
          {
        id: crypto.randomUUID(),
        title, 
        completed : false
        },
      ] 
    })
  }

  function toogleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed} 
        }
        return todo
      })
       }
    )
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
    <p>Enter your todo's below:</p>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className=''>TodoList</h1>
    <TodoList todos={todos}
      toogleTodo={toogleTodo}
      deleteTodo={deleteTodo}/>
  </>
)
}
