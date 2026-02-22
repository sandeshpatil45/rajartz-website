import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export const JaliCuttingModel = ({ color = '#FF6B6B' }) => {
  const groupRef = useRef();
  const laserRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    if (laserRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 5) * 0.5 + 0.5;
      laserRef.current.material.opacity = pulse;
    }
  });

  const jaliPattern = useMemo(() => {
    const pattern = [];
    const gridSize = 5;
    const spacing = 0.4;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        if ((x + y) % 2 === 0) {
          pattern.push({
            x: (x - gridSize / 2) * spacing,
            y: (y - gridSize / 2) * spacing,
          });
        }
      }
    }
    return pattern;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Base panel */}
      <Box args={[2.5, 2.5, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.5} />
      </Box>

      {/* Jali cut pattern */}
      {jaliPattern.map((pos, i) => (
        <Box
          key={i}
          args={[0.15, 0.15, 0.15]}
          position={[pos.x, pos.y, 0]}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      ))}

      {/* Laser beam effect */}
      <Box
        ref={laserRef}
        args={[0.02, 3, 0.02]}
        position={[0.8, 0, 0.5]}
        rotation={[0, 0, Math.PI / 4]}
      >
        <meshStandardMaterial
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      </Box>
    </group>
  );
};
