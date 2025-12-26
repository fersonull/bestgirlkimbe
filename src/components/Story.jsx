import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const Story = () => {
  // ========================================
  // ✏️ EDIT YOUR MEMORIES HERE
  // ========================================
  const memories = [
    {
      date: 'January 2020',
      title: 'First Meeting',
      memory: 'The day our eyes met and my world changed forever',
    },
    {
      date: 'June 2020',
      title: 'First Date',
      memory: 'When I knew you were the one I wanted to spend forever with',
    },
    {
      date: 'December 2020',
      title: 'First "I Love You"',
      memory: 'Three words that changed everything between us',
    },
    {
      date: 'August 2023',
      title: 'The Proposal',
      memory: 'The moment I asked you to be mine forever',
    },
    {
      date: 'Today',
      title: 'Our Forever',
      memory: 'Every single day with you is my favorite day',
    },
  ];
  // ========================================

  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-champagne-50 to-white relative overflow-hidden"
      aria-labelledby="story-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-roseGold-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-burgundy-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-10 h-10 text-roseGold-500" />
          </motion.div>
          
          <h2
            id="story-heading"
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
          >
            Our Beautiful Moments
          </h2>
          
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Each memory with you is a treasure in my heart
          </p>
        </motion.div>

        {/* Memories Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {memories.map((item, index) => (
            <MemoryCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemoryCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-roseGold-400">
        <div className="flex items-start space-x-4">
          {/* Icon */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-roseGold-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-5 h-5 text-roseGold-600" fill="currentColor" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="font-lato text-xs uppercase tracking-wider text-roseGold-600 mb-2">
              {item.date}
            </p>
            <h3 className="font-playfair text-xl md:text-2xl text-burgundy-900 mb-3">
              {item.title}
            </h3>
            <p className="font-lato text-gray-700 leading-relaxed">
              {item.memory}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Story;
