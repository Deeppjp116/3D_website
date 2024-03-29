import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  // const earth = useGLTF('./planet/scene.gltf');
  const earth = useGLTF('./planet/real_planet/scene.gltf');

  return (
    <>
      <primitive object={earth.scene} scale={3} />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      size={{ width: 10, height: 10 }}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 2,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
