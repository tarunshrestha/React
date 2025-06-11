import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children, scale = 1 }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    // Smooth model rotation only, camera not overridden anymore
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return (
    <group ref={group} scale={scale}>
      {children}
    </group>
  );
};

export default CameraRig;
