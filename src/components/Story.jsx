import { motion } from 'framer-motion';
import { Music, Heart } from 'lucide-react';

const Story = () => {
  // ========================================
  // ✏️ EDIT YOUR SONG LYRICS HERE
  // Add the song that reminds you of her
  // ========================================
  const songTitle = "Your Song Title Here";
  const artist = "Artist Name";
  
  const lyrics = [
    "First line of the song",
    "Second line of the song",
    "",
    "Next verse line 1",
    "Next verse line 2",
    "Next verse line 3",
    "",
    "Chorus line 1",
    "Chorus line 2",
    "Chorus line 3",
    "",
    "More lyrics here",
    "Keep adding lines",
    "",
    "Final lines",
    "That mean the most",
  ];
  
  const dedication = "Kapag naririnig ko ang kantang ito, ikaw agad ang pumapasok sa isip ko. Bawat linya ay parang sinusulat para sa'yo.";
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <Music className="w-12 h-12 text-roseGold-500" />
            </motion.div>
            
            <h2
              id="story-heading"
              className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-4"
            >
              Ang Kanta Natin
            </h2>
            
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto italic">
              {dedication}
            </p>
          </motion.div>

          {/* Song Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 paper-texture"
          >
            {/* Song Title & Artist */}
            <div className="text-center mb-12 pb-8 border-b-2 border-burgundy-200">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block mb-4"
              >
                <div className="w-16 h-16 rounded-full bg-roseGold-100 flex items-center justify-center">
                  <Music className="w-8 h-8 text-roseGold-600" />
                </div>
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-playfair text-3xl md:text-4xl text-burgundy-900 mb-2"
              >
                "{songTitle}"
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-lato text-lg text-gray-600"
              >
                by {artist}
              </motion.p>
            </div>

            {/* Lyrics */}
            <div className="space-y-4">
              {lyrics.map((line, index) => {
                // Empty lines for spacing between verses
                if (line === "") {
                  return <div key={index} className="h-6" />;
                }

                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                    className="font-lato text-lg md:text-xl text-gray-700 leading-relaxed text-center"
                  >
                    {line}
                  </motion.p>
                );
              })}
            </div>

            {/* Bottom decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center justify-center space-x-4 mt-12 pt-8 border-t-2 border-burgundy-200"
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

export default Story;
