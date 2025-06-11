    import { useRef } from 'react';
    import { easing } from 'maath';
    import { useSnapshot } from 'valtio';
    import { useFrame } from '@react-three/fiber';
    import { Decal, useGLTF, useTexture } from '@react-three/drei';

    import shirtState from '../store';

    const Shirt = () => {
    const snap = useSnapshot(shirtState);
    const { nodes, materials } = useGLTF('/models/shirt_baked.glb');

    const shirtRef = useRef();

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((shirtState, delta) =>
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
    );

    const state_String = JSON.stringify(snap);

    return (
        <group key={state_String}>
        <mesh
            ref={shirtRef}
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1}
            material-roughness={1}
            dispose={null}
        >
        {/* <meshStandardMaterial
            attach="material"
            color={snap.color}
            side={2} // THREE.DoubleSide = 2
        /> */}
        </mesh>

        {snap.isFullTexture && (
            <Decal
            mesh={shirtRef}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
            />
        )}

        {snap.isLogoTexture && (
            <Decal
            mesh={shirtRef}
            position={snap.position}
            rotation={snap.rotation}
            scale={snap.scale}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
            />
        )}
        </group>
    );
    };


    export default Shirt;