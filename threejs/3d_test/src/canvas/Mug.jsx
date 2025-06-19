    import { useRef } from 'react';
    import { easing } from 'maath';
    import { useSnapshot } from 'valtio';
    import { useFrame } from '@react-three/fiber';
    import { Decal, useGLTF, useTexture } from '@react-three/drei';

import { mugState} from '../store';

    const Mug = () => {
    const snap = useSnapshot(mugState);
    const { nodes, materials } = useGLTF('/models/mug.glb');

    const mugRef = useRef();

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    // console.log(materials);


    useFrame((state, delta) =>
        easing.dampC(materials["Material.001"].color, snap.color, 0.25, delta)
    
    );

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
        <mesh
            ref={mugRef}
            castShadow
            geometry={nodes.Object_2.geometry}
            material={materials["Material.001"]}
            material-roughness={1}
            dispose={null}
        >
        </mesh>

        {snap.isFullTexture && (
            <Decal
            mesh={mugRef}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
            />
        )}

        {snap.isLogoTexture && (
            <Decal
            mesh={mugRef}
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
            />
        )}
        </group>
    );
    };


    export default Mug;