
// import { useState } from "react"


export default function Square({value, onSquareClick}){
    // const [value, setValue] = useState(null)

    // function handleClick(){
        // setValue("X")
    // }
    return (
        <button 
            className="square"
            onClick={onSquareClick}
            // onClick={handleClick}
        >{value}</button>
    )
}
