import React from 'react';
import { motion } from 'framer-motion';

export const Loader = ({ progress = 0 }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-heading gold-text mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          RAJ ARTZ
        </motion.h2>

        <div className="w-64 h-2 bg-bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-gold to-accent-neon"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        <motion.p
          className="mt-4 text-text-muted text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Experience... {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};
