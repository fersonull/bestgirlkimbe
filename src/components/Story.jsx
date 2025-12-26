import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';

const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const timelineEvents = [
    {
      date: 'January 2020',
      title: 'First Meeting',
      description: 'Our eyes met across the coffee shop, and in that moment, everything changed. A simple hello turned into hours of conversation.',
      image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop',
      position: 'left',
    },
    {
      date: 'June 2020',
      title: 'First Date',
      description: 'A romantic dinner under the stars, where we discovered our shared dreams and endless laughter that would define our journey together.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
      position: 'right',
    },
    {
      date: 'December 2020',
      title: 'The First I Love You',
      description: 'During a winter walk in the snow, three simple words changed everything. The world seemed to pause, and our hearts beat as one.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2074&auto=format&fit=crop',
      position: 'left',
    },
    {
      date: 'August 2023',
      title: 'The Proposal',
      description: 'On a sunset beach, with the waves as witnesses, you asked me to be yours forever. Through happy tears, I said yes to our forever.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      position: 'right',
    },
    {
      date: 'December 2024',
      title: 'Our First Anniversary',
      description: 'Celebrating one year of marriage and a lifetime of love ahead. Every moment with you is a cherished memory in our beautiful story.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop',
      position: 'left',
    },
  ];

  return (
    <section
      id="story"
      ref={containerRef}
      className="py-20 md:py-32 bg-champagne-50 paper-texture relative overflow-hidden"
      aria-labelledby="story-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-roseGold-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-burgundy-900/10 rounded-full blur-3xl" />

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
            <Heart className="w-12 h-12 text-roseGold-500" fill="currentColor" />
          </motion.div>
          
          <h2
            id="story-heading"
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
          >
            Our Love Story
          </h2>
          
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. 
            Here's the journey of how two hearts became one.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-roseGold-300" />
            <Heart className="w-4 h-4 text-roseGold-400" fill="currentColor" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-roseGold-300" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Animated center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-burgundy-200 via-roseGold-300 to-burgundy-200 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-burgundy-900 via-roseGold-500 to-burgundy-900"
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineEvent = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${
        event.position === 'right' ? 'md:grid-flow-dense' : ''
      }`}
    >
      {/* Date Circle - Center on desktop */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-roseGold-400 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-burgundy-900" />
          </div>
          {/* Pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-roseGold-400"
          />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: event.position === 'left' ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`${event.position === 'right' ? 'md:col-start-2' : ''}`}
      >
        <div className="glass rounded-2xl overflow-hidden shadow-2xl hover:shadow-roseGold-200/50 transition-shadow duration-300">
          {/* Image */}
          <div className="relative h-64 overflow-hidden group">
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 to-transparent" />
            
            {/* Mobile date badge */}
            <div className="md:hidden absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="font-lato text-sm font-medium text-burgundy-900 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-8">
            <p className="hidden md:block font-lato text-sm font-medium text-roseGold-600 mb-3 uppercase tracking-wider">
              {event.date}
            </p>
            
            <h3 className="font-playfair text-2xl md:text-3xl text-burgundy-900 mb-4">
              {event.title}
            </h3>
            
            <p className="font-lato text-gray-700 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Empty space for alignment on desktop */}
      <div className={`hidden md:block ${event.position === 'right' ? 'md:col-start-1' : ''}`} />
    </motion.div>
  );
};

export default Story;
