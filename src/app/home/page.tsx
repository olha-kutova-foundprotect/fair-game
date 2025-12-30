'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-black text-white flex items-center">
        <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
          >
            Ideas are easy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.7, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug tracking-tight"
          >
            Solving big problems and commercialising them isn’t.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -120, scale: 2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            That’s what{' '}
            <span className="text-purple-500 font-bold">Fair Game</span> does.
          </motion.p>

        </div>
      </section>
    </main>
  );
}
