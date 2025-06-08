import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  // const presetColors = [
  //   "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934",
  //   "#3E5151", "#FFC312", "#C4E538", "#12CBC4", "#FDA7DF"
  //   ];

  return (
    // <div className="absolute left-full grid grid-cols-4 gap-10 p-10 ">
    //   {presetColors.map((color) => (
    //     <div
    //       key={color}
    //       onClick={() => (state.color = color)}
    //       style={{
    //         backgroundColor: color,
    //         width: "30px",
    //         height: "30px",
    //         borderRadius: "50%",
    //         cursor: "pointer",
    //         border: state.color === color ? "2px solid black" : "1px solid #ccc",
    //       }}
    //     />
    //   ))}
    // </div>

    <div className="absolute left-full ml-3">
      <SketchPicker 
       color={snap.color}
       disableAlpha
       onChange={(color) => state.color = color.hex }
      //  presetColors={["#ccc", "#EFBD4E"]}
       />

    </div>
  )
}

export default ColorPicker