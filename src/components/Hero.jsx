import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToStory = () => {
    const element = document.querySelector('#story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      role="banner"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/60 via-burgundy-900/40 to-burgundy-900/70 z-10" />
        
        {/* Background Image - Replace with actual image */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')`,
          }}
          role="img"
          aria-label="Romantic wedding background"
        />
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-30 z-10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto border-2 border-champagne-300 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-champagne-300 rounded-full" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-greatVibes text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 drop-shadow-2xl"
        >
          For You, My Love
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-champagne-200 tracking-wider mb-4">
            Every Moment With You Is Magic
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-champagne-300">
            <div className="h-px w-12 bg-champagne-300" />
            <p className="font-lato text-lg sm:text-xl">
              You Are My Everything
            </p>
            <div className="h-px w-12 bg-champagne-300" />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(247, 231, 206, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToStory}
          className="mt-12 px-10 py-4 border-2 border-champagne-300 text-champagne-100 font-lato font-medium text-sm uppercase tracking-widest rounded-full hover:bg-champagne-300 hover:text-burgundy-900 transition-all duration-300 backdrop-blur-sm bg-white/10"
          aria-label="Explore our memories"
        >
          Our Beautiful Moments
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToStory}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
