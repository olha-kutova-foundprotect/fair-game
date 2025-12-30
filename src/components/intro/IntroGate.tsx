'use client';

import { useEffect, useState } from 'react';
import Home from '@/app/home/page';
import IntroAnimation from './IntroAnimation';
import { AnimatePresence, motion } from 'framer-motion';

const INTRO_KEY = 'fairgame:intro-played';

export default function IntroGate() {
  const [showHome, setShowHome] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem(INTRO_KEY) === 'true';
    setShowHome(hasPlayed);
    setReady(true);
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem(INTRO_KEY, 'true');
    setShowHome(true);
  };

  // ⛔ prevent hydration mismatch
  if (!ready) return null;

  return (
    <div className="fixed inset-0 bg-black">
      <AnimatePresence mode="wait">
        {!showHome ? (
          <motion.div
            key="intro"
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <IntroAnimation onFinish={handleFinish} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
