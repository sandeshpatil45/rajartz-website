# 🎨 RAJ ARTZ - Premium 3D Interactive Website

Modern, cinematic website with 3D graphics, scroll-driven animations, and interactive service showcases.

## ✨ Features

### Phase 1 - Foundation
- ✅ React 18 + Vite + Tailwind CSS
- ✅ 3D Hero scene with animated particles
- ✅ Glassmorphism design system
- ✅ Premium loader with progress bar
- ✅ Scroll animations (Framer Motion + GSAP)
- ✅ Mobile responsive

### Phase 2 - Interactive Services
- ✅ 5 Service cards with hover effects
- ✅ Full-screen 3D model viewer
- ✅ Interactive 3D models:
  - 🚗 Vehicle Wrapping (metallic car)
  - 💡 LED Signboards (glowing neon)
  - 🪵 Wood Carving (3D depth)
  - ⚡ Jali Cutting (laser pattern)
  - 💧 Hydro Dipping (liquid effect)
- ✅ Orbit controls (drag, zoom, pan)
- ✅ Auto-rotation for all models

## 🚀 Quick Start

```bash
cd website
npm install
npm run dev
```

Visit: http://localhost:5173

## 📦 Build

```bash
npm run build
```

## 🛠️ Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- GSAP 3
- Three.js + React Three Fiber
- React Three Drei

## 🎨 Design System

**Colors:**
- Background: `#0a0a0a`
- Gold: `#d4af37`
- Neon Cyan: `#00ffff`

**Fonts:**
- Headings: Orbitron
- Body: Inter

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Configuration

Update WhatsApp number in `src/App.jsx`:
```javascript
href="https://wa.me/YOUR_NUMBER"
```

## 📁 Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene.jsx
│   │   │   ├── effects/
│   │   │   │   ├── Particles.jsx
│   │   │   │   └── Lighting.jsx
│   │   │   └── models/
│   │   │       ├── CarModel.jsx
│   │   │       ├── LedSignModel.jsx
│   │   │       ├── WoodCarvingModel.jsx
│   │   │       ├── JaliCuttingModel.jsx
│   │   │       └── HydroDippingModel.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ServiceModal.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   └── Services.jsx
│   │   └── animations/
│   │       └── ScrollAnimations.jsx
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   ├── use3DLoader.js
│   │   ├── useDeviceDetection.js
│   │   └── useModelLoader.js
│   ├── utils/
│   │   └── performance.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

## 📄 License

© 2024 RAJ ARTZ. All rights reserved.

