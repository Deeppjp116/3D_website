import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <group>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={4} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.25 : 0.6}
          position={isMobile ? [-0.3, -2, 0.3] : [0, -3.25, -1.5]}
          rotation={isMobile ? [2 * Math.PI, 1, 6.25] : [2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  //  Add Event Listener for changes to the screen size
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // Set the initial value of the ''iMobile' state varible
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    // Define a callback dunction to handel chnges to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callBack function  as a listemer for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Reamove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        legacy={false}
        frameloop='always'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={3}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
