import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 300, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Quality Guaranteed' },
];

const FEATURES = [
  { icon: '✓', text: 'Premium Materials' },
  { icon: '✓', text: 'Expert Craftsmanship' },
  { icon: '✓', text: 'Timely Delivery' },
  { icon: '✓', text: 'Affordable Pricing' },
  { icon: '✓', text: 'Custom Designs' },
  { icon: '✓', text: 'After-Sales Support' },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl font-black gold-text">
      {count}{suffix}
    </span>
  );
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 px-6 lg:px-8" style={{ background: 'rgba(26,26,26,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Why Choose RAJ ARTZ?</h2>
          <p className="text-text-muted text-lg">Trusted by hundreds of customers across the region</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center glass-gold rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-text-muted mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.text}
              className="flex items-center gap-3 glass rounded-xl p-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-accent-gold font-bold text-xl">{feat.icon}</span>
              <span className="text-text-primary font-medium">{feat.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
