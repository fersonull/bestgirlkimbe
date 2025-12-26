import { motion } from 'framer-motion';
import { Music, Heart, Play } from 'lucide-react';

const Story = () => {
  // ========================================
  // ✏️ EDIT YOUR FAVORITE SONGS HERE
  // Add the songs that remind you of her
  // ========================================
  const favoriteSongs = [
    {
      title: "Song Title 1",
      artist: "Artist Name",
      album: "Album Name",
      reason: "Why this song reminds you of her",
      albumCover: "https://via.placeholder.com/300x300/B76E79/FFFFFF?text=Album+1",
    },
    {
      title: "Song Title 2",
      artist: "Artist Name",
      album: "Album Name",
      reason: "What this song means to you both",
      albumCover: "https://via.placeholder.com/300x300/4A0404/FFFFFF?text=Album+2",
    },
    {
      title: "Song Title 3",
      artist: "Artist Name",
      album: "Album Name",
      reason: "A special memory with this song",
      albumCover: "https://via.placeholder.com/300x300/F7E7CE/4A0404?text=Album+3",
    },
    {
      title: "Song Title 4",
      artist: "Artist Name",
      album: "Album Name",
      reason: "How this song makes you feel",
      albumCover: "https://via.placeholder.com/300x300/B76E79/FFFFFF?text=Album+4",
    },
    {
      title: "Song Title 5",
      artist: "Artist Name",
      album: "Album Name",
      reason: "Another beautiful memory",
      albumCover: "https://via.placeholder.com/300x300/4A0404/FFFFFF?text=Album+5",
    },
    {
      title: "Song Title 6",
      artist: "Artist Name",
      album: "Album Name",
      reason: "Why you love this song",
      albumCover: "https://via.placeholder.com/300x300/F7E7CE/4A0404?text=Album+6",
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
          className="text-center mb-16"
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
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
          >
            Mga Kanta Para Sa'yo
          </h2>
          
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Bawat kanta ay may espesyal na dahilan kung bakit ko iniisip ka
          </p>
        </motion.div>

        {/* Songs Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {favoriteSongs.map((song, index) => (
            <SongCard key={index} song={song} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SongCard = ({ song, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Album Cover */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-burgundy-900 to-roseGold-600">
          <motion.img
            src={song.albumCover}
            alt={`${song.title} album cover`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Play button overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-burgundy-900/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer shadow-xl"
            >
              <Play className="w-8 h-8 text-burgundy-900 ml-1" fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

        {/* Song Info */}
        <div className="p-6">
          {/* Song Title */}
          <h3 className="font-playfair text-xl md:text-2xl text-burgundy-900 mb-2 line-clamp-2">
            {song.title}
          </h3>
          
          {/* Artist & Album */}
          <p className="font-lato text-sm text-gray-600 mb-1">
            {song.artist}
          </p>
          <p className="font-lato text-xs text-gray-500 mb-4 italic">
            {song.album}
          </p>

          {/* Divider */}
          <div className="flex items-center space-x-2 my-4">
            <div className="h-px flex-1 bg-gradient-to-r from-burgundy-200 to-transparent" />
            <Heart className="w-3 h-3 text-roseGold-400" fill="currentColor" />
            <div className="h-px flex-1 bg-gradient-to-l from-burgundy-200 to-transparent" />
          </div>

          {/* Reason */}
          <p className="font-lato text-sm text-gray-700 leading-relaxed">
            {song.reason}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Story;
