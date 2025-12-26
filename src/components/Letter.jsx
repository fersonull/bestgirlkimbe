import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Letter = () => {
  // ========================================
  // ✏️ EDIT YOUR LETTER CONTENT HERE
  // ========================================
  const letterParagraphs = [
    "My Dearest Love,",
    "",
    "From the moment I met you, my life changed in ways I never imagined possible. You brought light into my world, warmth into my heart, and meaning to every day.",
    "",
    "Every laugh we share, every quiet moment together, every adventure we embark on - these are the treasures I hold closest to my heart. You make ordinary moments extraordinary just by being there.",
    "",
    "I love the way you smile when you're happy, the way you scrunch your nose when you're thinking, the way you make everything feel like home. I love your kindness, your strength, your beautiful soul.",
    "",
    "Thank you for choosing me. Thank you for your patience, your love, your trust. Thank you for being exactly who you are - perfect in every imperfect way.",
    "",
    "I promise to always cherish you, to support your dreams, to hold your hand through everything life brings us. You are my today and all of my tomorrows.",
    "",
    "Forever grateful to call you mine,",
    "With all my love",
  ];
  // ========================================

  return (
    <section
      id="letter"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-champagne-50 to-white relative overflow-hidden"
      aria-labelledby="letter-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-roseGold-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-burgundy-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <Heart className="w-16 h-16 text-roseGold-400" fill="currentColor" />
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
                className="absolute inset-0"
              >
                <Heart className="w-16 h-16 text-roseGold-400" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          {/* Letter Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 paper-texture"
          >
            <div className="space-y-6">
              {letterParagraphs.map((paragraph, index) => {
                // Empty lines for spacing
                if (paragraph === "") {
                  return <div key={index} className="h-4" />;
                }

                // First line (greeting) - fancy script
                if (index === 0) {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="font-greatVibes text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-8"
                    >
                      {paragraph}
                    </motion.h2>
                  );
                }

                // Last two lines (signature) - fancy script, aligned right
                if (index >= letterParagraphs.length - 2) {
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="font-greatVibes text-3xl sm:text-4xl text-burgundy-900 text-right mt-8"
                    >
                      {paragraph}
                    </motion.p>
                  );
                }

                // Regular paragraphs
                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="font-lato text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </div>

            {/* Decorative bottom element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center space-x-4 mt-12"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-burgundy-300 to-transparent" />
              <Heart className="w-4 h-4 text-roseGold-400" fill="currentColor" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-burgundy-300 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
