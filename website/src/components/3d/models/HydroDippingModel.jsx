import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';

export const HydroDippingModel = ({ color = '#4ECDC4' }) => {
  const objectRef = useRef();
  const waterRef = useRef();

  useFrame((state) => {
    if (objectRef.current) {
      objectRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
    if (waterRef.current) {
      waterRef.current.material.displacementScale = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      {/* Water container */}
      <Box args={[2, 1, 2]} position={[0, -0.5, 0]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.3}
          metalness={0.1}
          roughness={0}
        />
      </Box>

      {/* Water surface */}
      <Box
        ref={waterRef}
        args={[2, 0.05, 2]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          metalness={0.3}
          roughness={0.1}
          displacementScale={0.1}
        />
      </Box>

      {/* Object being dipped */}
      <Sphere
        ref={objectRef}
        args={[0.4, 32, 32]}
        position={[0, 0.5, 0]}
      >
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </Sphere>

      {/* Pattern film on water */}
      <Box args={[1.8, 0.01, 1.8]} position={[0, 0.02, 0]}>
        <meshStandardMaterial
          color="#ff6b6b"
          transparent
          opacity={0.7}
          metalness={0.5}
        />
      </Box>
    </group>
  );
};
