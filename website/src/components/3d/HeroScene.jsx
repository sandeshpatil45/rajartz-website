import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Particles } from './effects/Particles';
import { Lighting } from './effects/Lighting';

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <Suspense fallback={null}>
          <Lighting />
          <Particles count={2000} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
