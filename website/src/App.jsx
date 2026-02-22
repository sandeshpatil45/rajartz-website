import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Star, Shield, PenTool, Wrench, ChevronRight, Phone, MapPin, Mail } from 'lucide-react';
import { Services } from './components/sections/Services';

const WA_NUMBER = "918928777727"; // Raj Artz WhatsApp number

const handleWhatsAppClick = (serviceName = "") => {
  let message = "Hello Raj Artz! I am interested in your custom visual products.";
  if (serviceName) {
    message = `Hello Raj Artz! I am interested in your ${serviceName} service. Can you share more details?`;
  }
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

const _services = [
  { name: 'LED Name Plates', image: '/anjani niwas led.png' },
  { name: 'LED Sign Boards', image: '/led board roopam.png' },
  { name: 'Vehicle Wrap', image: '/nexon car wrap.png' },
  { name: 'PPF (Paint Protection Film)', image: '/bmw car wrap.png' },
  { name: '3D Wood Carving', image: '/3d wood carving.jpeg' },
  { name: 'Jali Cutting', image: '/jali cutting.jpeg' },
  { name: 'House Name Plates', image: '/House name.jpeg' },
  { name: 'Premium Name Plates', image: '/extra assets 4.jpeg' },
  { name: 'Number Plates', image: '/number plate.jpeg' },
  { name: 'Stainless Steel Letters', image: '/stainless steel plate.jpeg' },
  { name: 'Hydro Dipping', image: '/hydrodip2.jfif' },
];

const galleryImages = [
  '/before after car wrap.png',
  '/bmw car wrap 2.png',
  '/jali cutting 2.jpeg',
  '/led board roopam.png',
  '/anjani niwas led.png',
  '/3d wood carving.jpeg',
  '/House name.jpeg',
  '/jali cutting.jpeg',
  '/nexon car wrap.png',
  '/bmw car wrap.png',
  '/hydrodip.jpg',
];

const testimonials = [
  { name: "Abhishek Tapdiya", text: "The MG car wrap completely transformed my vehicle. The finishing is absolutely premium and flawless.", role: "MG Car Wrap" },
  { name: "Sunil Borade", text: "Got PPF done for my BMW. The attention to detail and protection it offers is unmatched. Highly recommended!", role: "BMW PPF" },
  { name: "Umakant Malpur", text: "Nexon car wrap done beautifully. The color pops and the edges are seamlessly tucked. Great workmanship.", role: "Nexon Car Wrap" },
  { name: "Kapil Kabra", text: "Ordered a custom LED name plate for my home. It looks incredibly luxurious and perfectly matches our exterior.", role: "Custom LED Name Plate" },
  { name: "Sagar Jain", text: "Their 3D wood carving and Jali cutting work is top-notch. Brought my interior design vision to life.", role: "Interior Woodwork" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-slide gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500); // Change every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 sm:py-3 shadow-2xl shadow-black/50' : 'bg-transparent py-3 sm:py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/logo raj artz.jpg" alt="Raj Artz Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-[#D4AF37]" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-white uppercase flex items-center gap-1 sm:gap-2">
              <span className="text-[#D4AF37]">Raj</span> Artz
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
            <button 
              onClick={() => handleWhatsAppClick()}
              className="bg-[#D4AF37] text-black px-6 py-2.5 rounded hover:bg-[#b5952f] transition-colors font-bold flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Request Pricing
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-neutral-900 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="flex flex-col px-6 gap-4 text-center">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#D4AF37]">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#D4AF37]">Services</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#D4AF37]">Reviews</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#D4AF37]">Gallery</a>
            <button 
              onClick={() => { handleWhatsAppClick(); setMobileMenuOpen(false); }}
              className="bg-[#D4AF37] text-black py-3 rounded mt-2 font-bold flex justify-center items-center gap-2"
            >
              <MessageCircle size={20} /> Request Pricing
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-[#0a0a0a] to-neutral-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base mb-4 sm:mb-6 font-semibold animate-fade-in">Welcome to Raj Artz</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] animate-gradient">
              PPF • Vehicle Wrap • LED Boards • Name Plates • Wood Crafting • Custom Fabrication
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your space with premium LED name plates, stunning vehicle wraps, exquisite wood carvings, and precision jali cutting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="#services"
              className="bg-[#D4AF37] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-105 w-full sm:w-auto text-center"
            >
              Explore Services
            </a>
            <button 
              onClick={() => handleWhatsAppClick()}
              className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Get in Touch
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-400 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center border-x border-neutral-800">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-400 uppercase tracking-wider">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-400 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Why Raj Artz</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D4AF37] group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#b5952f] group-hover:text-black transition-all duration-300 border border-neutral-800 group-hover:border-[#D4AF37] shadow-lg">
                <Star size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Premium Quality</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">Flawless craftsmanship with attention to every detail for a luxury finish.</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D4AF37] group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#b5952f] group-hover:text-black transition-all duration-300 border border-neutral-800 group-hover:border-[#D4AF37] shadow-lg">
                <PenTool size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Bespoke Designs</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">Custom creations tailored precisely to your vision and requirements.</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D4AF37] group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#b5952f] group-hover:text-black transition-all duration-300 border border-neutral-800 group-hover:border-[#D4AF37] shadow-lg">
                <Shield size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Lasting Materials</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">Only premium, durable materials that stand the test of time.</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D4AF37] group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#b5952f] group-hover:text-black transition-all duration-300 border border-neutral-800 group-hover:border-[#D4AF37] shadow-lg">
                <Wrench size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Expert Artisans</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">Highly skilled professionals with years of specialized experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">Real experiences from our valued clients who trusted us with their projects</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
            >
              {testimonials.map((testi, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-12 rounded-xl border border-neutral-800 relative">
                    <Star size={32} className="text-[#D4AF37] mb-6 absolute top-8 right-8 opacity-20" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />)}
                    </div>
                    <p className="text-neutral-300 text-lg md:text-xl italic mb-8 leading-relaxed">"{testi.text}"</p>
                    <div className="pt-6 border-t border-neutral-800">
                      <h4 className="text-white font-bold text-xl">{testi.name}</h4>
                      <p className="text-[#D4AF37] text-sm mt-2 font-medium">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex 
                    ? 'w-8 bg-[#D4AF37]' 
                    : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Transformation Gallery</h2>
            <p className="text-neutral-400 text-lg mb-6">See the stunning transformations we create</p>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              <img 
                src="/before after car wrap.png" 
                alt="Car Wrap Transformation" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Car Wrap</h3>
                  <p className="text-neutral-300">Complete vehicle transformation with precision wrap</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1a1a1a] p-8 rounded-xl border border-neutral-800">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#D4AF37]">✓</span> Professional Excellence
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Our expert team delivers flawless vehicle wraps that transform your car into a stunning masterpiece. Every curve, every edge is meticulously crafted for perfection.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-xl border border-neutral-800">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#D4AF37]">✓</span> Premium Materials
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  We use only the highest quality vinyl wraps that ensure durability, weather resistance, and a stunning finish that lasts for years.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-xl border border-neutral-800">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#D4AF37]">✓</span> Lifetime Support
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  From consultation to after-care, we're with you every step. Our commitment to your satisfaction extends beyond the installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#111] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Showcase Gallery</h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded"></div>
            <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">A collection of our finest projects that showcase precision, creativity, and excellence</p>
          </div>

          {/* Gallery Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentGalleryIndex * 100}%)` }}
              >
                {galleryImages.map((img, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] border-2 border-[#D4AF37]/30 rounded-xl overflow-hidden">
                      <img 
                        src={img} 
                        alt={`Gallery work ${index + 1}`} 
                        className="w-full h-full object-contain bg-neutral-900"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D4AF37] text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-neutral-700"
              aria-label="Previous image"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <button
              onClick={() => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D4AF37] text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-neutral-700"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentGalleryIndex 
                      ? 'w-8 bg-[#D4AF37]' 
                      : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to gallery image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order on WhatsApp CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-[#0a0a0a] to-black text-center border-b border-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#25D366] rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-8">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold px-6 md:px-8 py-3 bg-black/60 rounded-full border-2 border-[#D4AF37]">Let's Create Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Ready to Transform </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#20b858]">Your Vision Into Reality?</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get in touch with us today and let our expert team bring your ideas to life with precision and creativity.
          </p>
          <button 
            onClick={() => handleWhatsAppClick()}
            className="bg-[#25D366] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#20b858] transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] transform hover:-translate-y-1 hover:scale-105"
          >
            <MessageCircle size={28} />
            Chat on WhatsApp
          </button>
          <p className="text-neutral-500 mt-6 text-sm">Quick response • Free consultation • Expert guidance</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-[#0a0a0a] pt-20 pb-10 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo raj artz.jpg" alt="Raj Artz Logo" className="h-14 w-14 rounded-full object-cover border-2 border-[#D4AF37]" />
                <h2 className="text-3xl font-bold text-white uppercase tracking-widest">
                  <span className="text-[#D4AF37]">Raj</span> Artz
                </h2>
              </div>
              <p className="text-neutral-400 mb-8 max-w-sm leading-relaxed">
                Crafting excellence in custom designs, premium LED boards, stunning vehicle wraps, and exquisite wood carvings since years.
              </p>
              <button 
                onClick={() => handleWhatsAppClick()}
                className="bg-gradient-to-r from-[#D4AF37] to-[#b5952f] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 w-fit"
              >
                <MessageCircle size={20} /> Connect on WhatsApp
              </button>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-400">
                  <Phone size={20} className="text-[#D4AF37] shrink-0 mt-1" />
                  <span>+91 89287 77727<br/>+91 80550 00585</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-400">
                  <Mail size={20} className="text-[#D4AF37] shrink-0 mt-1" />
                  <span>rajartz58@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-400">
                  <MapPin size={20} className="text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <span>Shop No. 47-50, Jay Tower<br/>Ahilyabai Holkar Chowk, Karnapara Road<br/>Chhatrapati Sambhaji Nagar (Aurangabad)<br/>Maharashtra - 431005</span>
                    <a 
                      href="https://maps.google.com/?q=Shop+No.+47-50,+Jay+Tower,+Ahilyabai+Holkar+Chowk,+Karnapara+Road,+Chhatrapati+Sambhaji+Nagar+Aurangabad+Maharashtra+431005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:underline text-sm mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mb-16 mt-8">
            <h4 className="text-white font-bold mb-4 text-lg">Find Us</h4>
            <div className="rounded-lg overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9374!2d75.3486!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzMwLjMiTiA3NcKwMjAnNTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="350" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Raj Artz Location"
              ></iframe>
            </div>
          </div>

          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Raj Artz. All rights reserved.</p>
            <p>Designed for Premium Craftsmanship</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
