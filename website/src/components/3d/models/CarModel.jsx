import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const CarModel = ({ color = '#d4af37' }) => {
  const carRef = useRef();

  useFrame((state) => {
    if (carRef.current) {
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={carRef} position={[0, -0.5, 0]}>
      {/* Car Body */}
      <Box args={[2, 0.6, 1]} position={[0, 0.3, 0]}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </Box>

      {/* Car Roof */}
      <Box args={[1.2, 0.5, 0.9]} position={[0, 0.85, 0]}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </Box>

      {/* Wheels */}
      {[
        [-0.7, -0.1, 0.5],
        [0.7, -0.1, 0.5],
        [-0.7, -0.1, -0.5],
        [0.7, -0.1, -0.5],
      ].map((position, i) => (
        <group key={i} position={position} rotation={[0, 0, Math.PI / 2]}>
          <Sphere args={[0.25, 16, 16]}>
            <meshStandardMaterial color="#222" roughness={0.8} />
          </Sphere>
        </group>
      ))}

      {/* Windows */}
      <Box args={[1.1, 0.4, 0.85]} position={[0, 0.85, 0]}>
        <meshStandardMaterial
          color="#333"
          transparent
          opacity={0.3}
          metalness={1}
          roughness={0}
        />
      </Box>
    </group>
  );
};
