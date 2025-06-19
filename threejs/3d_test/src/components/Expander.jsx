import React from 'react';
import { useSnapshot } from 'valtio';
import { shirtState } from '../store'; // adjust path if needed

const Expander = () => {
  const snap = useSnapshot(shirtState);

  const handleScaleChange = (e) => {
    shirtState.scale = parseFloat(e.target.value);
  };

  const handleRotationChange = (axis, value) => {
    const newRotation = [...snap.rotation];
    newRotation[axis] = parseFloat(value);
    shirtState.rotation = newRotation;
  };

  const handlePositionChange = (axis, value) => {
    const newPosition = [...snap.position];
    newPosition[axis] = parseFloat(value);
    shirtState.position = newPosition;
  };

  return (
    <div className="absolute left-full ml-3 " style={{ padding: "1rem", background: "#fff", borderRadius: "8px", maxWidth: "300px" }}>
      <h3 className='text-center text-sm font-mono mb-2'>Adjust</h3>

      {/* Scale Control */}
      <div>
        <p className=' text-gray-500 text-xs truncate'>Scale: {snap.scale}</p>
        <input
          type="range"
          min="0.06"
          max="0.3"
          step="0.01"
          value={snap.scale}
          onChange={handleScaleChange}
        />
      </div>

      {/* Rotation Controls */}
      <div>
        <p className=' text-gray-500 text-xs truncate'>Rotation: {snap.rotation[2]}</p>
        <input
          type="range"
          min="-3.14"
          max="3.14"
          step="0.01"
          value={snap.rotation[2]}
          onChange={(e) => handleRotationChange(2, e.target.value)}
        />

        
      </div>

      {/* Position Controls */}
      <div>
        <p className=' text-gray-500 text-xs truncate'>Position X: {snap.position[0]}</p>
        <input
          type="range"
          min="-0.13"
          max="0.13"
          step="0.01"
          value={snap.position[0]}
          onChange={(e) => handlePositionChange(0, e.target.value)}
        />

        <p className=' text-gray-500 text-xs truncate'>Position Y: {snap.position[1]}</p>
        <input
          type="range"
          min="-0.22"
          max="0.11"
          step="0.01"
          value={snap.position[1]}
          onChange={(e) => handlePositionChange(1, e.target.value)}
        />

        {/* <p className=' text-gray-500 text-xs truncate'>Position Z: {snap.position[2]}</p>
        <label className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">Front</span>
        <input
          type="range"
          min="-0.1"
          max="0.07"
          step="0.01"
          value={snap.position[2]}
          onChange={(e) => handlePositionChange(2, e.target.value)}
        />
        </label> */}

        {/* <p className=' text-gray-500 text-xs truncate'></p>
        <label className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">Back</span>
        <input
          type="checkbox"
          checked={snap.position[2] === -0.1}
          onChange={(e) =>
                  handlePositionChange(2, e.target.checked ? -0.1 : 0.07)
                }
          value={snap.position[2]}
        />
        </label> */}

        <p className="text-gray-500 text-xs truncate ">
            </p>
            <label className="flex items-center gap-1">
              <span className="text-gray-500 text-xs">Flip:</span>
              <input
                type="checkbox"
                checked={snap.rotation[1] === -3.14}
                onChange={(e) =>
                  handleRotationChange(1, e.target.checked ? -3.14: 0.06 )
                }
                className={`w-3 h-3 accent-${snap.color}`}
              />
            </label>
      </div>
    </div>
  );
};

export default Expander;
