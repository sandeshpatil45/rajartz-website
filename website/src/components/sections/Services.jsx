import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'vehicle-wrap',
    title: 'Vehicle Wrapping',
    icon: '🚗',
    description: 'Transform your vehicle with premium wraps — matte, gloss, chrome finishes.',
    color: '#d4af37',
    image: '/images/bmw car wrap.png',
  },
  {
    id: 'led-boards',
    title: 'LED Signboards',
    icon: '💡',
    description: 'Eye-catching illuminated signs with custom designs and neon effects.',
    color: '#00ffff',
    image: '/images/led board roopam.png',
  },
  {
    id: 'wood-carving',
    title: 'Wood Carving',
    icon: '🪵',
    description: 'Intricate 3D carvings with precision CNC and handcrafted details.',
    color: '#cd853f',
    image: '/images/3d wood carving.jpeg',
  },
  {
    id: 'jali-cutting',
    title: 'Jali Cutting',
    icon: '⚡',
    description: 'Laser-cut decorative patterns for walls, partitions, and facades.',
    color: '#ff6b6b',
    image: '/images/jali cutting.jpeg',
  },
  {
    id: 'hydro-dipping',
    title: 'Hydro Dipping',
    icon: '💧',
    description: 'Water transfer printing for unique patterns on any surface.',
    color: '#4ecdc4',
    image: '/images/hydrodip.jpg',
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ border: `1px solid rgba(255,255,255,0.08)` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: `linear-gradient(to top, ${service.color}30, transparent)` }}
        />
      </div>

      {/* Content */}
      <div
        className="p-6 transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderTop: `2px solid transparent`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderTopColor = service.color;
          e.currentTarget.style.boxShadow = `0 0 20px ${service.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderTopColor = 'transparent';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <motion.span
            className="text-3xl"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            {service.icon}
          </motion.span>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
        <p className="text-text-muted text-sm mb-4">{service.description}</p>
        <a
          href="https://wa.me/918928777727"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
          style={{ color: service.color }}
        >
          Get Quote →
        </a>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Our Services</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Premium fabrication solutions crafted with passion and precision
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};
