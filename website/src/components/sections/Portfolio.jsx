import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  { src: '/images/bmw car wrap.png', category: 'vehicle', title: 'BMW Car Wrap' },
  { src: '/images/bmw car wrap 2.png', category: 'vehicle', title: 'BMW Wrap Premium' },
  { src: '/images/nexon car wrap.png', category: 'vehicle', title: 'Nexon Wrap' },
  { src: '/images/led board roopam.png', category: 'led', title: 'LED Signboard – Roopam' },
  { src: '/images/anjani niwas led1.png', category: 'led', title: 'LED Board – Anjani Niwas' },
  { src: '/images/3d wood carving.jpeg', category: 'wood', title: '3D Wood Carving' },
  { src: '/images/House name.jpeg', category: 'wood', title: 'House Name Board' },
  { src: '/images/jali cutting.jpeg', category: 'jali', title: 'Jali Cutting Pattern' },
  { src: '/images/jali cutting 2.jpeg', category: 'jali', title: 'Jali Cutting Design 2' },
  { src: '/images/hydrodip.jpg', category: 'hydro', title: 'Hydro Dipping' },
  { src: '/images/hydrodip2.jpg', category: 'hydro', title: 'Hydro Dipping 2' },
  { src: '/images/number plate.jpeg', category: 'vehicle', title: 'Custom Number Plate' },
  { src: '/images/stainless steel plate..tentaive.jpeg', category: 'jali', title: 'Stainless Steel Plate' },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'vehicle', label: 'Vehicle Wrap' },
  { key: 'led', label: 'LED Boards' },
  { key: 'wood', label: 'Wood Carving' },
  { key: 'jali', label: 'Jali Cutting' },
  { key: 'hydro', label: 'Hydro Dipping' },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filtered = activeFilter === 'all' ? IMAGES : IMAGES.filter(i => i.category === activeFilter);

  const openLightbox = (img, idx) => {
    setLightbox(img);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setLightbox(null);

  const prevImg = () => {
    const prev = (lightboxIdx - 1 + filtered.length) % filtered.length;
    setLightboxIdx(prev);
    setLightbox(filtered[prev]);
  };

  const nextImg = () => {
    const next = (lightboxIdx + 1) % filtered.length;
    setLightboxIdx(next);
    setLightbox(filtered[next]);
  };

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Our Work</h2>
        <p className="text-text-muted text-lg">Browse our portfolio of completed projects</p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: activeFilter === f.key ? 'linear-gradient(135deg, #d4af37, #f4e5b0)' : 'rgba(255,255,255,0.05)',
              color: activeFilter === f.key ? '#0a0a0a' : '#a0a0a0',
              border: `1px solid ${activeFilter === f.key ? '#d4af37' : 'rgba(255,255,255,0.1)'}`,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((img, idx) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-4"
              onClick={() => openLightbox(img, idx)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold">{img.title}</p>
                <span className="text-accent-gold text-xs capitalize">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-white mt-4 text-lg font-semibold">{lightbox.title}</p>

              {/* Nav arrows */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white p-2 glass rounded-full"
                onClick={prevImg}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white p-2 glass rounded-full"
                onClick={nextImg}
                aria-label="Next"
              >
                ›
              </button>

              {/* Close */}
              <button
                className="absolute -top-10 right-0 text-white text-2xl"
                onClick={closeLightbox}
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
