import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToStory = () => {
    const element = document.querySelector('#story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ========================================
  // ✏️ EDIT YOUR CONTENT HERE
  // ========================================
  const heroLines = [
    "To My Love,",
    "",
    "Every moment with you",
    "is a beautiful memory.",
    "",
    "You are my sunshine,",
    "my laughter,",
    "my everything.",
    "",
    "Thank you for being mine.",
  ];
  // ========================================

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-champagne-50 via-white to-roseGold-50 paper-texture"
      role="banner"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-roseGold-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-burgundy-200/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20">
        {/* Decorative top element */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="w-16 h-16 mx-auto border-2 border-burgundy-300 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-burgundy-300 rounded-full" />
          </div>
        </motion.div>

        {/* Fancy Letters Compilation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 md:space-y-6"
        >
          {heroLines.map((line, index) => {
            // Empty lines for spacing
            if (line === "") {
              return <div key={index} className="h-4 md:h-6" />;
            }

            // First line is special (greeting)
            if (index === 0) {
              return (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="font-greatVibes text-5xl sm:text-6xl md:text-7xl text-burgundy-900 mb-8"
                >
                  {line}
                </motion.h1>
              );
            }

            // Regular lines
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="font-playfair text-2xl sm:text-3xl md:text-4xl text-gray-700 leading-relaxed"
              >
                {line}
              </motion.p>
            );
          })}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center space-x-4 my-12"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-burgundy-300" />
          <div className="w-2 h-2 rounded-full bg-roseGold-400" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-burgundy-300" />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToStory}
          className="px-8 py-3 border-2 border-burgundy-900 text-burgundy-900 font-lato font-medium text-sm uppercase tracking-widest rounded-full hover:bg-burgundy-900 hover:text-white transition-all duration-300"
          aria-label="View our memories"
        >
          View Our Story
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToStory}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-burgundy-900/60 hover:text-burgundy-900 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
