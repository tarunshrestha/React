import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Mug from './Mug';
import Hoodie from './Hoodie';

const CanvasModel = () => {
  const [scale, setScale] = useState(1);

  // Dynamically scale model based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setScale(2.5);
      else if (width < 1260) setScale(5);
      else setScale(5);
    };

    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: "100vh", background: "#f0f0f0" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={1} />    
        <directionalLight position={[0, 5, 5]} intensity={1} />

        <CameraRig scale={scale}>
          <Shirt />
          {/* <Mug /> */}
          {/* <Hoodie /> */}
        </CameraRig>

        <OrbitControls 
            enableZoom={true}
            enablePan={false}
            rotateSpeed={1}
            zoomSpeed={0.8}
            // maxAzimuthAngle={0}  // lock Y-axis
            // minAzimuthAngle={0}
            maxPolarAngle={4}    // lock Z-axis
            minPolarAngle={1}
        />
      </Canvas>
    </div>
  );
};

export default CanvasModel;
