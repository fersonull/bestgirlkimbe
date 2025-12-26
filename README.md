# 🌹 Romantic Wedding/Anniversary SPA

A luxurious, enterprise-grade Single Page Application designed for high-end romantic occasions. Built with React, Tailwind CSS, and Framer Motion.

![Version](https://img.shields.io/badge/version-1.0.0-burgundy)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-cyan)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Elegant Design System** - Custom burgundy, champagne, and rose gold palette
- 💫 **Smooth Animations** - Framer Motion powered entrance and scroll effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant with ARIA labels
- 🔒 **Secure** - XSS prevention and OWASP best practices
- ⚡ **Fast** - Optimized with Vite for instant hot module replacement
- 🖼️ **Interactive Gallery** - Masonry layout with lightbox modal
- 📝 **Smart Forms** - Real-time validation with security features

## 🎯 Components

### 1. **Navbar**
Glassmorphic sticky navigation that transitions on scroll with smooth anchor links.

### 2. **Hero Section**
Full-screen parallax hero with animated typography and elegant CTA button.

### 3. **Story Timeline**
Vertical timeline with scroll-triggered animations and alternating card layout.

### 4. **Gallery**
Responsive masonry grid with hover effects and keyboard-navigable lightbox.

### 5. **RSVP Form**
Secure contact form with validation, sanitization, and accessible error messages.

### 6. **Footer**
Elegant footer with social links and decorative elements.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
The app will be available at `http://localhost:5173/`

## 🎨 Design System

### Typography
- **Headings**: Playfair Display, Cinzel
- **Body**: Lato, Inter
- **Accents**: Great Vibes, Alex Brush

### Color Palette
```css
Primary (Burgundy): #4A0404
Secondary (Champagne): #F7E7CE
Accent (Rose Gold): #B76E79
Background: #FDFBF7
```

### Visual Effects
- Glassmorphism with backdrop-blur
- Parallax scrolling
- Smooth transitions
- Custom scrollbar styling

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation with scroll effects
│   ├── Hero.jsx         # Parallax hero section
│   ├── Story.jsx        # Timeline component
│   ├── Gallery.jsx      # Image gallery with lightbox
│   ├── RSVPForm.jsx     # Secure contact form
│   └── Footer.jsx       # Footer with social links
├── App.jsx              # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles + Tailwind

tailwind.config.js      # Tailwind configuration
postcss.config.js       # PostCSS configuration
vite.config.js          # Vite configuration
```

## 🔒 Security Features

### XSS Prevention
The RSVP form includes input sanitization:
```javascript
const sanitizeInput = (input) => {
  const element = document.createElement('div');
  element.textContent = input;
  return element.innerHTML;
};
```

### Form Validation
- Email format validation
- Character length limits
- Required field checks
- Real-time error feedback

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Color contrast compliance
- Screen reader support

## 🛠️ Technologies

- **React 19.2.0** - UI Framework
- **Vite 7.2.4** - Build tool
- **Tailwind CSS 4.0** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Customization

### Update Content
Edit the component files to customize:
- Hero text: `src/components/Hero.jsx`
- Timeline events: `src/components/Story.jsx`
- Gallery images: `src/components/Gallery.jsx`
- Social links: `src/components/Footer.jsx`

### Change Colors
Modify the `@theme` section in `src/index.css`:
```css
@theme {
  --color-burgundy-900: #4A0404;
  --color-champagne-300: #F7E7CE;
  --color-rose-gold-700: #B76E79;
}
```

### Add Your Images
Replace the Unsplash placeholder URLs with your own images.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Other Platforms
Build the app and deploy the `dist` folder:
```bash
npm run build
```

## 📄 Documentation

For detailed documentation, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)

## 🤝 Contributing

This is a portfolio/personal project. Feel free to fork and customize for your own romantic occasions!

## 📝 License

MIT License - feel free to use for personal projects.

## 💖 Made With Love

Built for celebrating special moments and eternal bonds.

---

**Development Server**: `npm run dev`  
**Production Build**: `npm run build`  
**Preview Build**: `npm run preview`
