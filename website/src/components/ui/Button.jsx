import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-accent-gold text-bg-primary hover:shadow-lg hover:shadow-accent-gold/50 font-bold',
    secondary: 'glass hover:bg-accent-gold/10 text-text-primary',
    neon: 'bg-accent-neon text-bg-primary hover:shadow-lg hover:shadow-accent-neon/50 font-bold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg font-semibold transition-all duration-300
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
