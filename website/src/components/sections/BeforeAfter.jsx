import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const PAIRS = [
  {
    before: '/images/extra assets.jfif',
    after: '/images/bmw car wrap.png',
    title: 'BMW Transformation',
    category: 'Vehicle Wrap',
  },
  {
    before: '/images/extra assets1.jfif',
    after: '/images/nexon car wrap.png',
    title: 'Nexon Makeover',
    category: 'Vehicle Wrap',
  },
  {
    before: '/images/before after car wrap.png',
    after: '/images/bmw car wrap 2.png',
    title: 'Full Wrap Transformation',
    category: 'Vehicle Wrap',
  },
];

const Slider = ({ pair }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (isDragging.current) updatePosition(e.clientX);
  }, [updatePosition]);

  const onTouchMove = useCallback((e) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none cursor-ew-resize"
      style={{ height: '350px' }}
      onMouseMove={onMouseMove}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchMove={onTouchMove}
      onTouchEnd={() => { isDragging.current = false; }}
    >
      {/* After (right) */}
      <img src={pair.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (left - clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={pair.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000/position}%` }} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent-gold"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-gold flex items-center justify-center cursor-ew-resize z-10"
        style={{ left: `${position}%`, boxShadow: '0 0 20px rgba(212,175,55,0.6)' }}
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
      >
        <span className="text-accent-gold text-sm font-bold">⇔</span>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-bold text-white">BEFORE</div>
      <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs font-bold text-accent-gold">AFTER</div>
    </div>
  );
};

export const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Transformations</h2>
        <p className="text-text-muted text-lg">Drag the slider to see the magic</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PAIRS.map((pair, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Slider pair={pair} />
            <div className="mt-4 text-center">
              <p className="font-semibold text-white">{pair.title}</p>
              <span className="text-accent-gold text-sm">{pair.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
