import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    try{
      const response = await fetch("http://127.0.0.1:8000/book/")
      const data = await response.json()
      setBooks(data)
    } catch (e){
      console.log(e)
    }
  }
  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input type="text" placeholder='Book Title...'></input>
        <input type="number" placeholder='Release Date...'></input>
        <button>Add Book</button>
      </div>
      {books.map((book) => <div>
        <p>Title: {book.title}</p>
        <p>Released Year: {book.released_date}</p>
      </div>)}
    </>
  )
  
}

export default App
