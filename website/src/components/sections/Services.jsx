import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceModal } from '../ui/ServiceModal';

const services = [
  {
    id: 'vehicle-wrap',
    title: 'Vehicle Wrapping',
    description: 'Transform your vehicle with premium wraps — matte, gloss, chrome finishes',
    icon: '🚗',
    color: '#d4af37',
    model: 'car',
  },
  {
    id: 'led-boards',
    title: 'LED Signboards',
    description: 'Eye-catching illuminated signs with custom designs and neon effects',
    icon: '💡',
    color: '#00ffff',
    model: 'led',
  },
  {
    id: 'wood-carving',
    title: 'Wood Carving',
    description: 'Intricate 3D carvings with precision CNC and handcrafted details',
    icon: '🪵',
    color: '#8B4513',
    model: 'wood',
  },
  {
    id: 'jali-cutting',
    title: 'Jali Cutting',
    description: 'Laser-cut decorative patterns for walls, partitions, and facades',
    icon: '⚡',
    color: '#FF6B6B',
    model: 'jali',
  },
  {
    id: 'hydro-dipping',
    title: 'Hydro Dipping',
    description: 'Water transfer printing for unique patterns on any surface',
    icon: '💧',
    color: '#4ECDC4',
    model: 'hydro',
  },
];

const ServiceCard = ({ service, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="relative overflow-hidden rounded-xl cursor-pointer h-full p-6 transition-transform duration-300"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: `2px solid ${isHovered ? service.color : 'rgba(255,255,255,0.1)'}`,
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.3s ease, border-color 0.3s ease',
          boxShadow: isHovered ? `0 0 24px ${service.color}40` : 'none',
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        <motion.div
          className="text-5xl mb-4"
          animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 10 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm mb-6">{service.description}</p>

        {/* View 3D Preview indicator */}
        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-1 text-xs font-medium"
          style={{ color: service.color }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View 3D Preview
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Our Services
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Premium fabrication solutions — click any card for an interactive 3D preview
        </p>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      {/* 3D Preview Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
