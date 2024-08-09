import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [releasedDate, setReleasedDate] = useState(0)
  const [newTitle, setNewTitle] = useState("")

  
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

  const addBook = async () => {
    const bookData = {
      title,
      released_date: releasedDate,
    }
    try{
      const response = await fetch("http://127.0.0.1:8000/book/", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookData)
      })

      const data = await response.json()
      setBooks((prev) => [...prev, data])

    } catch (e) {
      console.log(e)
      console.log(bookData)
    }
  }

  const updateTitle = async (pk, released_date) => {
    const bookData = {
      title: newTitle,
      released_date,
    }
    try{
      const response = await fetch(`http://127.0.0.1:8000/book/${pk}/`, {
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookData)
      })

      const data = await response.json()
      setBooks((prev) =>
        prev.map((book) => (book.id === pk ? data : book))
      );
    } catch (e) {
      console.log(e)
    }
  }

  const deleteBook = async (pk) => {
    try{
      const response = await fetch(`http://127.0.0.1:8000/book/${pk}/`, {
        method: "DELETE",
      })

      setBooks((prev) => prev.filter((book) => book.id !== pk))
    } catch (e){
      console.log(e)
    }
  }

  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input 
          type="text" 
          placeholder='Book Title...' 
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <input 
          type="date" 
          placeholder='Release Date...'
          onChange={(e) => setReleasedDate(e.target.value)}
        ></input>

        <button onClick={addBook}>Add Book</button>
      </div>
      {books.map((book) => <div>
        <p>Title: {book.title}</p>
        <p>Released Year: {book.released_date}</p>
        <input
          type="text" 
          placeholder='New Title...'
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
        <button onClick={() => updateTitle(book.id, book.released_date)}>Change Title</button>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>)}
    </>
  )
  
}

export default App
