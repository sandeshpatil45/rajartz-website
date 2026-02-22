# 🎨 RAJ ARTZ - Premium 3D Interactive Website

Modern, cinematic website with 3D graphics, scroll-driven animations, and glassmorphism design.

## 🚀 Tech Stack

- **React 18+** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - UI Animations
- **GSAP** - Scroll Animations
- **Three.js** - 3D Graphics
- **React Three Fiber** - React wrapper for Three.js

## 📦 Installation

```bash
cd website
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Visit: http://localhost:5173

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── 3d/          # Three.js components
│   │   ├── ui/          # Reusable UI components
│   │   ├── sections/    # Page sections
│   │   └── animations/  # Animation hooks
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

## 🎨 Design System

### Colors
- Background: `#0a0a0a`
- Gold Accent: `#d4af37`
- Neon Accent: `#00ffff`

### Typography
- Headings: Orbitron
- Body: Inter

### Animations
- `animate-float` - Floating effect
- `animate-glow` - Glow effect
- `animate-breathe` - Breathing opacity

## 🔧 Configuration

WhatsApp number is set in `src/App.jsx`:
```javascript
href="https://wa.me/918928777727"
```

## 📱 Performance

- Lazy loading for 3D assets
- Mobile-responsive design
- WebGL fallback support
- Optimized bundle splitting

## 🚀 Deployment

```bash
npm run build
# Deploy the dist/ folder
```

## 📝 License

© 2024 RAJ ARTZ. All rights reserved.
