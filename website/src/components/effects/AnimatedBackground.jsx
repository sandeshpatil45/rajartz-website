import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-80" />
      
      {/* Floating orbs */}
      <div
        className="absolute w-96 h-96 rounded-full animate-orb"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
          animationDelay: '0s',
          animationDuration: '8s',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full animate-orb"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)',
          top: '40%',
          right: '10%',
          animationDelay: '2s',
          animationDuration: '10s',
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full animate-orb"
        style={{
          background: 'radial-gradient(circle, rgba(128,0,255,0.08) 0%, transparent 70%)',
          bottom: '20%',
          left: '30%',
          animationDelay: '4s',
          animationDuration: '12s',
        }}
      />
    </div>
  );
};
