import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

export const WoodCarvingModel = ({ color = '#8B4513' }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base wood panel */}
      <Box args={[2, 2, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={color}
          roughness={0.8}
          metalness={0.1}
        />
      </Box>

      {/* Carved pattern (raised elements) */}
      {[
        { x: 0, y: 0, z: 0.15, size: 0.4 },
        { x: 0.6, y: 0.6, z: 0.12, size: 0.3 },
        { x: -0.6, y: 0.6, z: 0.12, size: 0.3 },
        { x: 0.6, y: -0.6, z: 0.12, size: 0.3 },
        { x: -0.6, y: -0.6, z: 0.12, size: 0.3 },
      ].map((pos, i) => (
        <Box
          key={i}
          args={[pos.size, pos.size, 0.1]}
          position={[pos.x, pos.y, pos.z]}
        >
          <meshStandardMaterial
            color={new THREE.Color(color).multiplyScalar(1.2)}
            roughness={0.7}
            metalness={0.1}
          />
        </Box>
      ))}

      {/* Decorative border */}
      <Box args={[2.1, 2.1, 0.05]} position={[0, 0, -0.1]}>
        <meshStandardMaterial
          color={new THREE.Color(color).multiplyScalar(0.7)}
          roughness={0.9}
        />
      </Box>
    </group>
  );
};
