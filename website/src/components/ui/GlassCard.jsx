import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`glass rounded-xl p-6 ${className}`}
      whileHover={hover ? {
        scale: 1.05,
        boxShadow: '0 12px 40px rgba(212, 175, 55, 0.2)',
      } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
