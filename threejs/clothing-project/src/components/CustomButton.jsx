import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({type, title, handleClick, customStyles}) => {
    const snap = useSnapshot(state);
    
    const generateStyle = (type) =>{
      if(type === 'filled'){
        return {
            backgroundColor: snap.color,
            color:'#fff'
        }
      }
    }

  return (
    <button 
     className={`cursor-pointer px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
     style={generateStyle(type)}
     onClick={handleClick}
     >
        {title}
     </button>
  )
}

export default CustomButton