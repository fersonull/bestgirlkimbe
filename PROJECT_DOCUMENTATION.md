# 🌹 Romantic Wedding/Anniversary SPA - Complete Documentation

## 🎯 Project Overview

A high-end, enterprise-grade Single Page Application (SPA) built for romantic occasions (weddings, anniversaries, or special dates). This application features elegant animations, responsive design, and secure form handling.

## 🛠️ Technology Stack

### Core Technologies
- **React 19.2.0** - Modern UI framework with Vite build tool
- **Vite 7.2.4** - Lightning-fast development and build tool
- **Tailwind CSS 3.x** - Utility-first CSS framework with custom theme
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icon set

### Code Quality & Security
- **OWASP Compliant** - XSS prevention through input sanitization
- **Enterprise-grade** - Modular, scalable, and maintainable code
- **Accessibility** - WCAG 2.1 AA compliant with ARIA labels
- **SEO Optimized** - Semantic HTML and meta tags

## 🎨 Design System - "The Fancy Romantic Aesthetic"

### Typography
- **Headings**: Playfair Display & Cinzel (Elegant Serif)
- **Body**: Lato & Inter (Clean Sans-serif)
- **Accents**: Great Vibes & Alex Brush (Cursive/Script)

### Color Palette
```js
Primary: Deep Burgundy (#4A0404)
Secondary: Champagne Gold (#F7E7CE)
Accent: Rose Gold (#B76E79)
Background: Soft Cream (#FDFBF7)
```

### Visual Effects
- ✨ Glassmorphism (backdrop-blur) for cards and navigation
- 🎬 Parallax scrolling on hero section
- 💫 Framer Motion entrance and scroll animations
- 🌊 Smooth transitions and hover effects
- 📜 Custom scrollbar styling

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky glassmorphic navigation with scroll effects
│   ├── Hero.jsx            # Full-screen parallax hero with animated text
│   ├── Story.jsx           # Vertical timeline with scroll-triggered animations
│   ├── Gallery.jsx         # Masonry grid with lightbox modal
│   ├── RSVPForm.jsx        # Secure form with validation and XSS prevention
│   └── Footer.jsx          # Elegant footer with social links
├── App.jsx                 # Main composition and layout
├── main.jsx               # React entry point
└── index.css              # Global styles with Tailwind directives

public/                     # Static assets
tailwind.config.js         # Custom theme configuration
postcss.config.js          # PostCSS configuration
vite.config.js             # Vite configuration
```

## 🚀 Getting Started

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

### Development Server
The app runs on `http://localhost:5173/` by default.

## 📦 Components Documentation

### 1. Navbar Component
**Features:**
- Sticky positioning with scroll detection
- Glassmorphism effect that transitions on scroll
- Smooth anchor scrolling to sections
- Mobile-responsive hamburger menu
- Animated scroll progress indicator

**Key Props:** None (self-contained)

### 2. Hero Section
**Features:**
- Full-screen immersive background
- Parallax scrolling effect (background moves slower than content)
- Animated script text overlay with Framer Motion
- CTA button with gold border and hover glow
- Scroll indicator with bounce animation

**Customization:**
- Update background image in `Hero.jsx` line 24
- Modify heading text and taglines

### 3. Story (Timeline) Component
**Features:**
- Vertical timeline with alternating left/right layout
- Animated line drawing on scroll
- Date circles with pulse animations
- Image cards with hover effects
- Fully responsive (stacked on mobile)

**Data Structure:**
```js
{
  date: 'January 2020',
  title: 'First Meeting',
  description: 'Your story here...',
  image: 'image-url',
  position: 'left' | 'right'
}
```

### 4. Gallery Component
**Features:**
- Masonry grid layout (CSS columns)
- Hover scale effects
- Full-screen lightbox modal
- Keyboard navigation (Arrow keys, Escape)
- Image counter and captions

**Adding Images:**
Update the `images` array in `Gallery.jsx`

### 5. RSVP Form Component
**Security Features:**
- ✅ XSS Prevention - HTML entity escaping
- ✅ Input validation (email, length, required fields)
- ✅ Real-time error feedback
- ✅ Client-side sanitization
- ✅ ARIA labels for accessibility

**Form Fields:**
- Name (required, 2-100 characters)
- Email (required, valid format)
- Attendance (required, dropdown)
- Message (optional, max 500 characters)

**Backend Integration:**
Replace the simulated API call in `handleSubmit` (line 84) with your actual endpoint.

### 6. Footer Component
**Features:**
- Elegant design with decorative SVG wave
- Social media links
- Quick navigation
- Auto-updating copyright year
- Responsive layout

## 🎭 Animation Details

### Framer Motion Variants
- **fadeIn**: Opacity 0 → 1
- **slideUp**: TranslateY(30px) + Opacity animation
- **scaleIn**: Scale(0.9) → Scale(1)
- **Parallax**: useTransform for scroll-based movement

### Scroll Animations
Uses Intersection Observer API for reveal-on-scroll effects:
```js
threshold: 0.1  // Trigger when 10% visible
rootMargin: '0px 0px -50px 0px'  // 50px before element enters viewport
```

## 🔒 Security Best Practices

### XSS Prevention (RSVP Form)
```js
const sanitizeInput = (input) => {
  const element = document.createElement('div');
  element.textContent = input;
  return element.innerHTML;
};
```

### Validation
- Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Length constraints on all inputs
- Server-side validation required (implement in backend)

### Recommendations
1. Implement CSRF tokens for form submission
2. Use HTTPS in production
3. Add rate limiting on backend
4. Sanitize on both client and server
5. Implement Content Security Policy headers

## 📱 Responsive Design

### Breakpoints (Tailwind Default)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach
All components are designed mobile-first and scale up:
- Gallery: 1 column → 2 → 3 columns
- Timeline: Stacked → Alternating sides
- Navbar: Hamburger menu → Full navigation

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Alt text for images
- ✅ Form labels and error messages
- ✅ Skip links (can be added for enhancement)

### Keyboard Navigation
- Tab through interactive elements
- Enter/Space to activate buttons
- Arrow keys in lightbox
- Escape to close modals

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js` theme.extend.colors:
```js
burgundy: { 900: '#4A0404', ... }
champagne: { 300: '#F7E7CE', ... }
roseGold: { 700: '#B76E79', ... }
```

### Fonts
Update Google Fonts link in `index.html` and `tailwind.config.js`

### Images
Replace Unsplash placeholder images with your own:
- Hero background
- Timeline event images
- Gallery images

### Content
Update text content in each component file:
- Hero: Lines 54-77
- Story: Timeline events array (lines 16-56)
- Gallery: Images array (lines 9-52)
- Footer: Social links and text (lines 8-47)

## 🚀 Production Deployment

### Build Optimization
```bash
npm run build
```
Output in `dist/` folder.

### Deployment Platforms
- **Vercel**: Zero-config deployment (recommended)
- **Netlify**: Drag & drop or Git integration
- **GitHub Pages**: Static hosting
- **AWS S3 + CloudFront**: Enterprise solution

### Environment Variables
Create `.env` for API endpoints:
```env
VITE_API_URL=https://your-api.com
```

## 📊 Performance Optimizations

### Implemented
- ✅ Lazy loading images (`loading="lazy"`)
- ✅ CSS code splitting
- ✅ Tree-shaking with Vite
- ✅ Font preconnect
- ✅ Optimized re-renders
- ✅ Framer Motion layout animations

### Recommendations
- Add image optimization (WebP format)
- Implement lazy loading for components
- Add service worker for offline support
- Compress images before deployment
- Use CDN for static assets

## 🐛 Troubleshooting

### Build Errors
1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Check Node version: Requires Node 16+

### Styling Issues
1. Ensure Tailwind is processing: Check `tailwind.config.js` content paths
2. PostCSS configuration: Verify `postcss.config.js`
3. Clear browser cache

### Animation Performance
1. Reduce motion for users: Add `prefers-reduced-motion` media queries
2. Limit concurrent animations
3. Use `will-change` CSS property sparingly

## 📝 Future Enhancements

### Suggested Features
- [ ] Guest management system
- [ ] Photo upload functionality
- [ ] Live countdown timer
- [ ] Music player with playlist
- [ ] Virtual guestbook
- [ ] Map integration for venue
- [ ] Registry links
- [ ] Save the date email integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Photo filters/effects
- [ ] Social media sharing
- [ ] Confetti animations

## 📄 License

This project is created for portfolio/personal use. Customize as needed for your special occasion.

## 🤝 Support

For questions or customization requests:
- Review component documentation above
- Check inline code comments
- Refer to Tailwind CSS docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion

---

**Built with ❤️ for celebrating love stories**
