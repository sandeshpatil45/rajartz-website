import React from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from '../3d/HeroScene';
import { Button } from '../ui/Button';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary -z-[5]" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="gold-text">RAJ ARTZ</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Premium Fabrication &amp; Design Studio
          <br />
          <span className="neon-text text-base sm:text-lg md:text-xl">Crafting Excellence in 3D</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button variant="primary" size="lg" onClick={() => scrollToSection('services')}>
            Explore Our Work
          </Button>
          <Button variant="secondary" size="lg" onClick={() => scrollToSection('contact')}>
            Get a Quote
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-accent-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
