import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart } from 'lucide-react';

const Story = () => {
  const timelineEvents = [
    {
      date: 'January 2020',
      title: 'First Meeting',
      description: 'Our eyes met across the coffee shop, and in that moment, everything changed.',
      image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop',
    },
    {
      date: 'June 2020',
      title: 'First Date',
      description: 'A romantic dinner under the stars, where we discovered our shared dreams.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      date: 'December 2020',
      title: 'The First I Love You',
      description: 'During a winter walk, three simple words changed everything.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2074&auto=format&fit=crop',
    },
    {
      date: 'August 2023',
      title: 'The Proposal',
      description: 'On a sunset beach, with the waves as witnesses, you asked me to be yours forever.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    },
    {
      date: 'Today',
      title: 'Our Forever',
      description: 'Every moment with you is a cherished memory in our beautiful story.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-champagne-50 relative overflow-hidden"
      aria-labelledby="story-heading"
    >
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
            <Heart className="w-10 h-10 text-roseGold-500" fill="currentColor" />
          </motion.div>
          
          <h2
            id="story-heading"
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
          >
            Our Story
          </h2>
          
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            These moments with you are everything to me
          </p>
        </motion.div>

        {/* Minimal Timeline Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <TimelineCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      {/* Minimal Card */}
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/80 via-burgundy-900/20 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="font-lato text-xs uppercase tracking-wider text-champagne-200 mb-2">
              {event.date}
            </p>
            <h3 className="font-playfair text-xl md:text-2xl mb-2">
              {event.title}
            </h3>
            <p className="font-lato text-sm text-champagne-100 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Story;
