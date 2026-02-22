import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SERVICES = ['Vehicle Wrapping', 'LED Signboards', 'Wood Carving', 'Jali Cutting', 'Hydro Dipping', 'Other'];

export const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi RAJ ARTZ!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918928777727?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Get In Touch</h2>
        <p className="text-text-muted text-lg">Ready to transform your vision into reality?</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-gold rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/918928777727"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent-gold transition-all duration-300 group"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(37,211,102,0.2)' }}>
                  💬
                </div>
                <div>
                  <p className="text-text-muted text-xs">WhatsApp (Primary)</p>
                  <p className="text-white font-semibold group-hover:text-accent-gold transition-colors">+91 89287 77727</p>
                </div>
              </a>

              <a
                href="tel:+918928777727"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent-gold transition-all duration-300 group"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(212,175,55,0.2)' }}>
                  📞
                </div>
                <div>
                  <p className="text-text-muted text-xs">Phone</p>
                  <p className="text-white font-semibold group-hover:text-accent-gold transition-colors">+91 89287 77727</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(0,255,255,0.2)' }}>
                  📍
                </div>
                <div>
                  <p className="text-text-muted text-xs">Location</p>
                  <p className="text-white font-semibold">Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-text-muted text-sm mb-3">Business Hours</p>
              <p className="text-white text-sm">Mon–Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-text-muted text-sm">Sunday: By Appointment</p>
            </div>
          </div>

          <a
            href="https://wa.me/918928777727?text=Hi%20RAJ%20ARTZ%2C%20I%20would%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-lg font-bold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              color: 'white',
              boxShadow: '0 0 30px rgba(37,211,102,0.4)',
            }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="glass-gold rounded-2xl p-8 space-y-5">
            <h3 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h3>

            <div>
              <label className="block text-text-muted text-sm mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-text-muted outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={e => { e.target.style.borderColor = '#d4af37'; e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.3)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <div>
              <label className="block text-text-muted text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-text-muted outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={e => { e.target.style.borderColor = '#d4af37'; e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.3)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <div>
              <label className="block text-text-muted text-sm mb-2">Service Required</label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-300"
                style={{
                  background: 'rgba(26,26,26,0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={e => { e.target.style.borderColor = '#d4af37'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <option value="">Select a service...</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-text-muted text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your project..."
                className="w-full px-4 py-3 rounded-xl text-white placeholder-text-muted outline-none transition-all duration-300 resize-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={e => { e.target.style.borderColor = '#d4af37'; e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.3)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, #d4af37, #f4e5b0)',
                color: '#0a0a0a',
              }}
            >
              {sent ? '✓ Message Sent!' : 'Get Free Quote via WhatsApp'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
