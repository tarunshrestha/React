import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({products}) => {
  return (
    <>
    <SearchBar />
    <ProductTable products={products} />
    </>
  )
}

export default FilterableProductTable