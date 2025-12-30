'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <section className="min-h-screen pt-0 bg-black text-white flex items-center">
        <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">
          {/* Line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-light"
          >
            Ideas are easy!
          </motion.h1>

          {/* Line 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug"
          >
            Solving big problems and commercialising them isn’t.
          </motion.p>

          {/* Line 3 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6, ease: 'easeOut' }}
            className="text-2xl sm:text-4xl md:text-5xl font-light"
          >
            That’s what{' '}
            <span className="text-purple-500 font-normal">Fair Game</span> does.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
