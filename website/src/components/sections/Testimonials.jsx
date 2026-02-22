import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    business: 'Car Enthusiast',
    rating: 5,
    text: 'Absolutely stunning wrap on my BMW! The quality of work and attention to detail is unmatched. RAJ ARTZ truly delivers excellence.',
    category: 'Vehicle Wrap',
  },
  {
    name: 'Priya Mehta',
    business: 'Boutique Owner',
    rating: 5,
    text: 'Our LED signboard looks amazing! Customers always compliment it. The team was professional and delivered exactly what we envisioned.',
    category: 'LED Signboard',
  },
  {
    name: 'Anil Kumar',
    business: 'Homeowner',
    rating: 5,
    text: 'The wood carving for our home entrance is a masterpiece. Everyone who visits asks about it. Highly recommend RAJ ARTZ!',
    category: 'Wood Carving',
  },
  {
    name: 'Sneha Patil',
    business: 'Interior Designer',
    rating: 5,
    text: 'Used their jali cutting service for a client project. The precision and finish quality exceeded expectations. Will definitely use again.',
    category: 'Jali Cutting',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-accent-gold" style={{ textShadow: '0 0 8px rgba(212,175,55,0.8)' }}>★</span>
    ))}
  </div>
);

export const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8" style={{ background: 'rgba(26,26,26,0.3)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">What Clients Say</h2>
          <p className="text-text-muted text-lg">Real feedback from our satisfied customers</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="glass-gold rounded-2xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl text-accent-gold mb-6 opacity-30">"</div>
              <p className="text-white text-lg md:text-xl mb-8 italic leading-relaxed">
                {TESTIMONIALS[active].text}
              </p>
              <div className="flex flex-col items-center gap-2">
                <Stars count={TESTIMONIALS[active].rating} />
                <p className="text-white font-bold text-lg mt-2">{TESTIMONIALS[active].name}</p>
                <p className="text-text-muted">{TESTIMONIALS[active].business}</p>
                <span className="text-accent-gold text-sm px-3 py-1 glass-gold rounded-full mt-1">
                  {TESTIMONIALS[active].category}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  background: i === active ? '#d4af37' : 'rgba(255,255,255,0.2)',
                  transform: i === active ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
