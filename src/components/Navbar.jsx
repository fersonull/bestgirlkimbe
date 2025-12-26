import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy-900 via-roseGold-400 to-champagne-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart
                className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-burgundy-900' : 'text-white drop-shadow-lg'
                }`}
                fill="currentColor"
              />
              <span
                className={`font-greatVibes text-3xl transition-colors duration-300 ${
                  isScrolled ? 'text-burgundy-900' : 'text-white drop-shadow-lg'
                }`}
              >
                Our Love Story
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`font-lato font-medium text-sm uppercase tracking-wider transition-colors duration-300 hover:text-roseGold-500 relative group ${
                    isScrolled ? 'text-burgundy-900' : 'text-white drop-shadow-md'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-roseGold-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-burgundy-900 hover:bg-burgundy-900/10'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="glass mt-4 mx-4 rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block font-lato font-medium text-burgundy-900 hover:text-roseGold-500 transition-colors py-2 border-b border-burgundy-900/10 last:border-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
