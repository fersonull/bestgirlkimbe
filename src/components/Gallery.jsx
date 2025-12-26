import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Smile, Sun } from 'lucide-react';

const Gallery = () => {
  // ========================================
  // ✏️ EDIT YOUR REASONS HERE
  // ========================================
  const reasons = [
    {
      icon: Heart,
      title: 'Your Smile',
      description: 'It lights up my entire world and makes everything better',
    },
    {
      icon: Sparkles,
      title: 'Your Kindness',
      description: 'The way you care for everyone around you is truly beautiful',
    },
    {
      icon: Star,
      title: 'Your Laugh',
      description: 'The most magical sound I have ever heard',
    },
    {
      icon: Sun,
      title: 'Your Warmth',
      description: 'You make every place feel like home',
    },
    {
      icon: Smile,
      title: 'Your Spirit',
      description: 'Your positive energy is contagious and inspiring',
    },
    {
      icon: Heart,
      title: 'Your Love',
      description: 'The way you love me makes me want to be a better person',
    },
    {
      icon: Sparkles,
      title: 'Your Dreams',
      description: 'I love supporting your ambitions and watching you shine',
    },
    {
      icon: Star,
      title: 'Your Presence',
      description: 'Just being near you makes everything feel right',
    },
    {
      icon: Heart,
      title: 'Everything About You',
      description: 'From your quirks to your strengths, I love all of you',
    },
  ];
  // ========================================

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-roseGold-50/30 to-white relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-champagne-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-burgundy-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Heart className="w-12 h-12 text-roseGold-500" fill="currentColor" />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0"
              >
                <Heart className="w-12 h-12 text-roseGold-400" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
          
          <h2
            id="gallery-heading"
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
          >
            Why I Love You
          </h2>
          
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            There are countless reasons, but here are just a few...
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-greatVibes text-3xl md:text-4xl text-burgundy-900">
            And a million more reasons every single day...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ReasonCard = ({ reason, index }) => {
  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="h-full glass rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-roseGold-100 to-champagne-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-roseGold-600" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="font-playfair text-xl md:text-2xl text-burgundy-900 mb-3">
          {reason.title}
        </h3>

        {/* Description */}
        <p className="font-lato text-gray-700 leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Gallery;
