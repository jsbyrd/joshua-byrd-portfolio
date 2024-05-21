import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import Computer from '../../public/Computer';

// Hidden on smaller devices to avoid slow rendering on weaker machines
const ComputerContainer = () => {

  return (
    <div className='h-[100px] w-[100px] hidden sm:inline-block' >
      <Canvas>
        <ambientLight />
        <ContactShadows opacity={0.5} position={[0, -0.2, 0]} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
      </Canvas>  
    </div>
  )
}

export default ComputerContainer;