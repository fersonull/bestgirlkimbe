import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const Letter = () => {

  const letterParagraphs = [
    "Dear Kimbe,",
    "",
    "Happy Anniversary Love! ILOVEYOUUUSUPERRR! also congrats to the both of us for surviving another year! im so so proud of you superrr!",
    "",
    "Sorry for being pasaway loveee, thankyou for your patience sa akinnn kahit alam kong nakakapagod ako i-handle :(",
    "",
    "Pansin mo ba love, paulit-ulit na picture na nilalagay ko here? pahingi naman ako ng mga pic dyan beh hehe. baka namannn! Hindi ko na makita picture natin nung nag-iloggg, pa-send ulitttt. thanks po, mwaaaa.",
    "",
    "Beh, hindi mo to mababasa, ilalagay ko to sa ilalim ng ref. 'Jo, ano na jo?' HAHAHHAHHAHHAH corny missyou beh. ",
    "",
    "You know this naman na, pero i will not get tired of reminding you na i am your always kakampi, mapa-illegal man yan or hindi beh. charizzz, siyempre good langs beh, bait kong to, hayyy. ILOVEYOUUUU MY PRETTYY LOVELOVEEE!",
    "",
    "Beh, sa truth lang nababaduyan ako sa gawa kong ito. hindi ka ba nagsasawa sa mga gawa kong baduy na website? HAHAHHHHAHAHAHAHAHA",
    "",
    "Pero ayun ngaaa, ONE YEAR NA USSSSS! YEYYYYYYYYYY! Keep it up lang beh, charizzz HAHHAHHAHHHAHHA. ILOVEYOUUUUUUUSOMUCHHHHH, HAPPY ANNIVERSARRYYYYYY MWAAAAAAA!",

    "Mahal na mahal kita,",
    "Palagi",
  ];

  return (
    <section
      id="letter"
      className="py-20 md:py-32 bg-gradient-to-b from-champagne-50 via-white to-champagne-50 relative overflow-hidden"
      aria-labelledby="letter-heading"
    >
      {/* Fancy Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-roseGold-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-burgundy-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-300/20 rounded-full blur-3xl" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [100, -100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          >
            <Heart className="w-4 h-4 text-roseGold-300" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Fancy Decorative Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              {/* Multiple pulsing hearts */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Heart className="w-32 h-32 text-roseGold-300" fill="currentColor" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Heart className="w-24 h-24 text-burgundy-300" fill="currentColor" />
              </motion.div>

              <Heart className="w-16 h-16 text-burgundy-900" fill="currentColor" />

              {/* Sparkles around the heart */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute"
                  style={{
                    top: i === 0 ? '-30px' : i === 1 ? '-30px' : '50px',
                    left: i === 0 ? '-30px' : i === 1 ? '50px' : i === 2 ? '-30px' : '50px',
                  }}
                >
                  <Sparkles className="w-6 h-6 text-champagne-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fancy Letter Card with Ornate Border */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Ornate Corner Decorations */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-burgundy-300 rounded-tl-3xl" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-burgundy-300 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-burgundy-300 rounded-bl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-burgundy-300 rounded-br-3xl" />

            {/* Main Card */}
            <div className="glass rounded-3xl shadow-2xl p-8 md:p-12 lg:p-20 paper-texture relative overflow-hidden">
              {/* Watermark background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Heart className="w-96 h-96 text-burgundy-900" fill="currentColor" />
              </div>

              {/* Top decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex items-center justify-center space-x-4 mb-12"
              >
                <Star className="w-5 h-5 text-roseGold-400" fill="currentColor" />
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-burgundy-300 to-transparent" />
                <Heart className="w-6 h-6 text-burgundy-400" fill="currentColor" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-burgundy-300 to-transparent" />
                <Star className="w-5 h-5 text-roseGold-400" fill="currentColor" />
              </motion.div>

              {/* Letter Content */}
              <div className="relative z-10 space-y-6">
                {letterParagraphs.map((paragraph, index) => {
                  if (paragraph === "") {
                    return <div key={index} className="h-4" />;
                  }

                  if (index === 0) {
                    return (
                      <motion.h2
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-greatVibes text-5xl sm:text-6xl md:text-7xl text-burgundy-900 mb-12 text-center relative"
                      >
                        {paragraph}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-roseGold-400 to-transparent rounded-full"
                        />
                      </motion.h2>
                    );
                  }

                  if (index >= letterParagraphs.length - 2) {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="font-greatVibes text-4xl sm:text-5xl text-burgundy-900 text-right mt-12"
                      >
                        {paragraph}
                      </motion.p>
                    );
                  }

                  const isFirstParagraph = index === 2;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                    >
                      {isFirstParagraph ? (
                        <p className="font-lato text-lg md:text-xl text-gray-700 leading-relaxed">
                          <span className="font-playfair text-6xl md:text-7xl float-left mr-3 mt-2 leading-none text-burgundy-900">
                            {paragraph[0]}
                          </span>
                          {paragraph.slice(1)}
                        </p>
                      ) : (
                        <p className="font-lato text-lg md:text-xl text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center justify-center space-x-4 mt-12"
              >
                <Star className="w-5 h-5 text-roseGold-400" fill="currentColor" />
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-burgundy-300 to-transparent" />
                <Heart className="w-6 h-6 text-burgundy-400" fill="currentColor" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-burgundy-300 to-transparent" />
                <Star className="w-5 h-5 text-roseGold-400" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
