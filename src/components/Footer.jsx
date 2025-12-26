import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ========================================
  // ✏️ EDIT YOUR FOOTER MESSAGE HERE
  // ========================================
  const footerMessage = "You Are My Forever";
  const footerSubtext = "Every day with you is a gift. Thank you for being mine.";
  // ========================================

  return (
    <footer
      className="relative bg-gradient-to-b from-champagne-50 via-burgundy-800/40 to-burgundy-900/60 text-white py-16 overflow-hidden"
      role="contentinfo"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-16 text-champagne-50"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heart Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <Heart className="w-12 h-12 text-champagne-200/80" fill="currentColor" />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0"
              >
                <Heart className="w-12 h-12 text-champagne-200/60" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-greatVibes text-4xl sm:text-5xl md:text-6xl text-champagne-100/90 mb-6"
          >
            {footerMessage}
          </motion.h3>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-lato text-lg text-champagne-100/70 mb-8"
          >
            {footerSubtext}
          </motion.p>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-champagne-200/40 to-transparent" />
            <Heart className="w-3 h-3 text-roseGold-300/60" fill="currentColor" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-champagne-200/40 to-transparent" />
          </motion.div>

          {/* Simple Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-lato text-sm text-champagne-100/50"
          >
            {currentYear} • Made with{' '}
            <Heart className="inline w-3 h-3 text-roseGold-300/70 mx-1" fill="currentColor" />
            just for you
          </motion.p>
        </div>
      </div>

      {/* Decorative bottom elements */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-roseGold-500/10 rounded-full blur-3xl -mb-24 -ml-24" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-champagne-300/10 rounded-full blur-3xl -mb-24 -mr-24" />
    </footer>
  );
};

export default Footer;
