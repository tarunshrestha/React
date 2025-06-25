import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from "@react-three/drei";

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Mug from './Mug';
// import Hoodie from './Hoodie';

const CanvasModel = ({ selected }) => {
  const [scale, setScale] = useState(1);

  // Responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setScale(2.5);
      else if (width < 1260) setScale(5);
      else setScale(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderModel = () => {
    switch (selected) {
      case "mug":
        return (
          <>
            <CameraRig scale={scale * 2}>
              <Center>
                <Mug />
              </Center>
            </CameraRig>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              rotateSpeed={1}
              zoomSpeed={0.8}
              maxPolarAngle={100}
              minPolarAngle={0}
              maxAzimuthAngle={100}  // lock Y-axis
              minAzimuthAngle={0}
            />
          </>
        );

      case "tshirt":
        return (
          <>
            <CameraRig scale={scale}>
              <Center>
              <Shirt />
              </Center>
            </CameraRig>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              rotateSpeed={1}
              zoomSpeed={0.8}
              maxPolarAngle={4}
              minPolarAngle={1}
            />
          </>
        );
    }
  };

  return (
    <div style={{ height: "100vh", background: "#f0f0f0" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        {renderModel()}
      </Canvas>
    </div>
  );
};

export default CanvasModel;
