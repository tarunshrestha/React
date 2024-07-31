import React from 'react'

export default function Pagination({next, previous}) {
  return (
    <div>
        {previous && <button onClick={previous}> Previous</button>}
        {next && <button onClick={next}> Next</button>}
    </div>
  )
}
