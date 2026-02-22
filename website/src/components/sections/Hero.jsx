import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '../effects/AnimatedBackground';

export const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-transparent to-bg-primary" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-heading font-black mb-4 tracking-wider">
            <span className="gold-text">RAJ ARTZ</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-text-muted mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Premium Fabrication &amp; Design Excellence
        </motion.p>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {['10+ Years Experience', '500+ Projects', '5-Star Rated'].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 text-sm font-semibold rounded-full glass-gold text-accent-gold"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="btn-primary text-lg" onClick={() => scrollTo('portfolio')}>
            View Our Work
          </button>
          <a
            href="https://wa.me/918928777727?text=Hi%20Raj%20Artz%2C%20I%20would%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg"
          >
            Get Free Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-accent-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
