'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* BACKGROUND IMAGE (MOBILE + DESKTOP SAME) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/mobile-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* HERO */}
      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="mb-6 flex items-center gap-4 text-xs uppercase tracking-widest text-white/60"
        >
          <span>Fair Game</span>
          <span className="h-px w-8 bg-white/40" />
          <span>Venture Studio</span>
        </motion.div>

        {/* H1 — bottom to top */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl text-4xl leading-tight sm:text-5xl"
        >
          Ideas are easy!
        </motion.h1>

        {/* Paragraph — bottom to top */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.9, ease: 'easeOut' }}
          className="mt-6 max-w-xl text-xl text-white/80 sm:text-2xl"
        >
          Solving big problems and commercialising them isn’t.
        </motion.p>

        {/* Emphasis — top to bottom */}
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.3, ease: 'easeOut' }}
          className="mt-4 max-w-xl text-4xl font-semibold text-[#F97316] sm:text-4xl"
        >
          That’s what Fair Game does.
        </motion.p>

        {/* CTA — later */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 4.2,
            duration: 0.8,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 rounded-xl bg-teal-400 px-8 py-3 font-semibold text-black hover:bg-teal-300"
        >
          Work with us
        </motion.button>

        {/* STATS — last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.0, duration: 1.0, ease: 'easeOut' }}
          className="mt-16 grid w-full max-w-xl grid-cols-2 gap-10 text-center sm:grid-cols-3"
        >
          <div>
            <div className="text-2xl font-bold text-teal-300">7+</div>
            <div className="mt-1 text-xs text-white/60">Ventures Built</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-teal-300">15+</div>
            <div className="mt-1 text-xs text-white/60">Founders Supported</div>
          </div>
          <div className="hidden sm:block">
            <div className="text-2xl font-bold text-teal-300">100%</div>
            <div className="mt-1 text-xs text-white/60">
              Hands-on Execution
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
