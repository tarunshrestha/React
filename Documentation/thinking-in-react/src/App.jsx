import { useState } from 'react'

import './App.css'
import FilterableProductTable from './components/FilterableProductTable'


const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragon fruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passion fruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  return (
    <>
     <FilterableProductTable products={products}/>
    </>
  )
}

export default App
