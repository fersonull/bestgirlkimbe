import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      ariaLabel: 'Follow us on Facebook',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      ariaLabel: 'Follow us on Twitter',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:couple@example.com',
      ariaLabel: 'Send us an email',
    },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-champagne-50 to-burgundy-900 text-white pt-20 pb-8 overflow-hidden"
      role="contentinfo"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-20 text-champagne-50"
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
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Logo/Heart Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-champagne-300" fill="currentColor" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-greatVibes text-4xl md:text-5xl text-champagne-200 mb-4"
          >
            You Are My Forever
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-lato text-champagne-300 max-w-2xl mx-auto"
          >
            Every day with you is a gift. Thank you for being mine.
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center space-x-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={social.ariaLabel}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-champagne-300 group-hover:border-champagne-300 transition-all duration-300">
                <social.icon className="w-5 h-5 text-champagne-200 group-hover:text-burgundy-900 transition-colors duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center space-y-4"
        >
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-lato">
            <a
              href="#story"
              className="text-champagne-300 hover:text-white transition-colors duration-300"
            >
              Our Story
            </a>
            <span className="text-champagne-400">•</span>
            <a
              href="#gallery"
              className="text-champagne-300 hover:text-white transition-colors duration-300"
            >
              Gallery
            </a>
          </div>

          {/* Copyright */}
          <p className="font-lato text-sm text-champagne-400">
            &copy; {currentYear} Made with{' '}
            <Heart className="inline w-4 h-4 text-roseGold-400" fill="currentColor" />{' '}
            for the most amazing person in my life
          </p>

          {/* Crafted by */}
          <p className="font-lato text-xs text-champagne-500">
            You mean the world to me
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-roseGold-500/10 rounded-full blur-3xl -mb-32 -ml-32" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-champagne-300/10 rounded-full blur-3xl -mb-32 -mr-32" />
    </footer>
  );
};

export default Footer;
