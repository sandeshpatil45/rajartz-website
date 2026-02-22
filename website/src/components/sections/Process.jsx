import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { number: '01', title: 'Consultation', desc: 'Discuss your vision and requirements with our experts.', icon: '💬' },
  { number: '02', title: 'Design & Planning', desc: 'Create mockups and finalize design details.', icon: '✏️' },
  { number: '03', title: 'Execution', desc: 'Professional fabrication and installation.', icon: '⚙️' },
  { number: '04', title: 'Delivery & Support', desc: 'Final inspection and after-sales care.', icon: '🚀' },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">How We Work</h2>
        <p className="text-text-muted text-lg">Simple, transparent process from start to finish</p>
      </motion.div>

      {/* Desktop: Horizontal timeline */}
      <div className="hidden md:block relative">
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold via-accent-neon to-accent-gold" />
        <div className="grid grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full glass-gold flex items-center justify-center text-2xl"
                style={{ boxShadow: '0 0 20px rgba(212,175,55,0.4)' }}>
                {step.icon}
              </div>
              <h3 className="text-accent-gold font-bold text-xl mb-1">{step.number}</h3>
              <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-text-muted text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden space-y-8">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex gap-4 items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center text-xl shrink-0"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.4)' }}>
              {step.icon}
            </div>
            <div>
              <span className="text-accent-gold font-bold text-sm">{step.number}</span>
              <h4 className="text-white font-semibold text-lg">{step.title}</h4>
              <p className="text-text-muted text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
