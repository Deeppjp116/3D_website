import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm.js';

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState([]);

  useEffect(() => {
    console.log('Generating sphere array');
    const newSphere = random.inSphere(new Float32Array(5001 * 5), {
      radius: 1.2,
    });
    console.log('Raw sphere array:', newSphere);
    const filteredSphere = newSphere.filter((value) => !isNaN(value));
    console.log('Filtered sphere array:', filteredSphere);
    setSphere(filteredSphere);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
