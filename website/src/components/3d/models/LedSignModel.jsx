import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';

export const LedSignModel = ({ color = '#00ffff' }) => {
  const lightRef = useRef();
  const textRef = useRef();

  useFrame((state) => {
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 1;
    if (lightRef.current) {
      lightRef.current.intensity = pulse * 2;
    }
    if (textRef.current) {
      textRef.current.material.emissiveIntensity = pulse;
    }
  });

  return (
    <group>
      {/* LED Board Base */}
      <Box args={[3, 1.5, 0.1]} position={[0, 0, -0.1]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </Box>

      {/* LED Text */}
      <Text
        ref={textRef}
        position={[0, 0, 0]}
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        RAJ ARTZ
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Text>

      {/* Glow Light */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 0.5]}
        color={color}
        intensity={2}
        distance={5}
      />

      {/* Neon Tubes (decorative) */}
      {[-1.4, -0.7, 0, 0.7, 1.4].map((x, i) => (
        <Box key={i} args={[0.05, 1.3, 0.05]} position={[x, 0, 0]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </Box>
      ))}
    </group>
  );
};
