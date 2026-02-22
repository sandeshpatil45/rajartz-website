import React from 'react';

export const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#d4af37"
        castShadow
      />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#00ffff" />
      <pointLight position={[5, -5, -5]} intensity={0.3} color="#d4af37" />
    </>
  );
};
