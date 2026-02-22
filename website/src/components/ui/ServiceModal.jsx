import React, { Suspense } from 'react';
import { motion as Motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { CarModel } from '../3d/models/CarModel';
import { LedSignModel } from '../3d/models/LedSignModel';
import { WoodCarvingModel } from '../3d/models/WoodCarvingModel';
import { JaliCuttingModel } from '../3d/models/JaliCuttingModel';
import { HydroDippingModel } from '../3d/models/HydroDippingModel';

const modelComponents = {
  car: CarModel,
  led: LedSignModel,
  wood: WoodCarvingModel,
  jali: JaliCuttingModel,
  hydro: HydroDippingModel,
};

export const ServiceModal = ({ service, onClose }) => {
  const ModelComponent = modelComponents[service.model];

  const handleWhatsAppQuote = () => {
    const message = `Hello Raj Artz! I am interested in your ${service.title} service. Can you share more details?`;
    const url = `https://wa.me/918928777727?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <Motion.div
        className="w-full max-w-5xl rounded-2xl overflow-hidden relative"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(212,175,55,0.3)',
          height: '80vh',
        }}
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 rounded-full transition-all"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Service Info Overlay */}
        <div className="absolute top-4 left-4 z-10 max-w-xs">
          <Motion.div
            className="p-5 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(212,175,55,0.4)' }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-4xl mb-2 block">{service.icon}</span>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {service.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-4">{service.description}</p>
            <button
              onClick={handleWhatsAppQuote}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-black transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)' }}
            >
              Get a Quote
            </button>
          </Motion.div>
        </div>

        {/* 3D Model Canvas */}
        <div className="w-full h-full">
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              {ModelComponent && <ModelComponent color={service.color} />}
              <Environment preset="city" />
            </Suspense>
            <OrbitControls
              enableZoom
              enablePan
              minDistance={3}
              maxDistance={10}
              autoRotate
              autoRotateSpeed={2}
            />
          </Canvas>
        </div>

        {/* Instructions */}
        <Motion.div
          className="absolute bottom-4 left-1/2 px-5 py-2 rounded-full text-sm text-neutral-400"
          style={{ transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🖱️ Drag to rotate · Scroll to zoom · Right-click to pan
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
};
