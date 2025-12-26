import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ========================================
  // ✏️ EDIT YOUR CAPTIONS HERE
  // Your photos are loaded from public/images folder
  // ========================================
  const images = [
    {
      src: '/images/kim1 (1).jpg',
      alt: 'Our precious moment together',
      caption: 'Forever with you',
    },
    {
      src: '/images/kim1 (2).jpg',
      alt: 'Beautiful memory',
      caption: 'This moment with you',
    },
    {
      src: '/images/kim1 (3).jpg',
      alt: 'Special time',
      caption: 'My favorite person',
    },
    {
      src: '/images/kim1 (4).jpg',
      alt: 'Together',
      caption: 'Every moment counts',
    },
    {
      src: '/images/kim1 (5).jpg',
      alt: 'Love',
      caption: 'You and me',
    },
    {
      src: '/images/kim1 (6).jpg',
      alt: 'Happiness',
      caption: 'Pure joy',
    },
    {
      src: '/images/kim1 (7).jpg',
      alt: 'Us',
      caption: 'Our story',
    },
    {
      src: '/images/kim1 (8).jpg',
      alt: 'Memories',
      caption: 'Treasured moment',
    },
    {
      src: '/images/kim1 (9).jpg',
      alt: 'Together forever',
      caption: 'Always with you',
    },
    {
      src: '/images/kim1 (10).jpg',
      alt: 'Love story',
      caption: 'My everything',
    },
    {
      src: '/images/kim1 (11).jpg',
      alt: 'Forever',
      caption: 'You complete me',
    },
  ];
  // ========================================

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-champagne-50 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-roseGold-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-burgundy-200/20 rounded-full blur-3xl" />

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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <Camera className="w-12 h-12 text-roseGold-500" />
          </motion.div>
          
          <h2
            id="gallery-heading"
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
          >
            Mga Alaala Natin
          </h2>
          
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Bawat larawan ay kayamanan ng ating pag-ibig
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <motion.button
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-roseGold-300 cursor-pointer"
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-50 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Previous button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image counter */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/70 text-center mt-4 font-lato text-sm"
              >
                {currentIndex + 1} / {images.length}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
