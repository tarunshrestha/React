import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { SpotLight } from "@react-three/drei";
import Island from "../models/Island";


{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Pop up
</div> */}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]
  
    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <Canvas className="w-full h-screen bg-transparent" camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <SpotLight />
          <hemisphereLight />
          
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home