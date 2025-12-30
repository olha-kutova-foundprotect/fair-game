'use client';

import { motion } from 'framer-motion';

const drop = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.8, 0.25, 1], // heavy but smooth
    },
  }),
};

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-black text-white flex items-center">
        <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">
          {/* Line 1 */}
          <motion.h1
            variants={drop}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
          >
            Ideas are easy.
          </motion.h1>

          {/* Line 2 */}
          <motion.p
            variants={drop}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug tracking-tight"
          >
            Solving big problems and commercialising them isn’t.
          </motion.p>

          {/* Line 3 — decisive scale-down */}
          <motion.p
            initial={{ opacity: 0, y: -120, scale: 2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1.8,
              duration: 1.3,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            That’s what{' '}
            <span className="text-purple-500 font-bold">
    Fair Game
  </span>{' '}
            does.
          </motion.p>

        </div>
      </section>
    </main>
  );
}
