import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 px-6 lg:px-8" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-heading font-black gold-text mb-3">RAJ ARTZ</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Premium Fabrication & Design Excellence. Transforming ideas into stunning realities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Why Choose Us', id: 'why-us' },
                { label: 'Contact', id: 'contact' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-text-muted hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + WhatsApp */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <a
              href="https://wa.me/918928777727"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                color: 'white',
                boxShadow: '0 0 20px rgba(37,211,102,0.3)',
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <p className="text-text-muted text-sm">+91 89287 77727</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-text-muted text-sm">© 2024 RAJ ARTZ. All rights reserved.</p>
          <button
            onClick={scrollTop}
            className="mt-4 sm:mt-0 px-4 py-2 glass-gold rounded-full text-accent-gold text-sm font-semibold hover:scale-105 transition-transform"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
