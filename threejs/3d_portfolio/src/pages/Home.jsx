import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { SpotLight } from "@react-three/drei";
import Island from "../models/Island";


{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Pop up
</div> */}

const Home = () => {
    console.log('Home is rendering'); // Debug line

  return (
    <section className='w-full h-screen relative'>
      <Canvas className="w-full h-screen bg-transparent" camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <SpotLight />
          <hemisphereLight />
          
          <Island />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home