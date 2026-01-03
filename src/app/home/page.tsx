'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
} from 'framer-motion';

/* -----------------------------
   CountUp (reliable, simple)
------------------------------ */
function CountUp({ to, delay = 0 }: { to: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const controls = animate(0, to, {
      delay,
      duration: 1.4,
      ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.floor(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [to, delay]);

  return <span ref={ref}>0</span>;
}

const Home: React.FC = () => {
  /* -----------------------------
     Mouse parallax for circles
  ------------------------------ */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 50, damping: 20 });
  const y = useSpring(rawY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 30);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawX, rawY]);

  return (
    <div className="relative min-h-screen w-full bg-charcoal-black overflow-hidden text-white">
      <div className="absolute inset-0 z-0 pointer-events-none bg-charcoal-black" />
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <span className="absolute bottom-[-8%] left-[1%] text-[20rem] font-bold text-white/3 leading-none">
          FAIR GAME
        </span>
      </div>

      {/* BACKGROUND ARCS (animate first) */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute -top-20 left-[40%] sm:-right-20 sm:left-[53%] w-[800px] h-[800px] rounded-full border-[75px]"
          style={{
            x,
            y,
            borderColor: 'rgba(38, 48, 61, 0.7)',
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[20%] sm:right-[-10%] sm:left-auto w-[600px] h-[600px] rounded-full border-[40px]"
          style={{
            x: -x,
            y: -y,
            borderColor: 'rgba(38, 48, 61, 0.4)',
          }}
        />
      </motion.div>

      {/* MOBILE DIAGONAL BAND (UNCHANGED) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden lg:hidden">
        <div
          className="absolute bottom-[-45%] left-[10%] w-[160%] h-[90%] rotate-[50deg]"
          style={{ background: 'rgba(38, 48, 61, 0.3)' }}
        />
      </div>

      <main className="relative z-20 container mx-auto px-6 min-h-screen flex items-start lg:items-start pt-10 lg:pt-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">

          {/* LEFT CONTENT */}
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0 mt-10 lg:mt-0">

          {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-500"
            >
              <span>Fair Game</span>
              <span className="w-8 h-px bg-gray-600" />
              <span>Venture Studio</span>
            </motion.div>

            {/* Ideas are easy */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="text-xl sm:text-[1.6rem] tracking-tight"
            >
              Ideas are easy!
            </motion.h1>

            {/* Solving big problems */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.7 }}
              className="text-xl sm:text-[1.3rem]"
            >
              Solving big problems and commercialising them isn’t.
            </motion.p>

            {/* Emphasis */}
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.2 }}
              className="text-2xl sm:text-5xl font-semibold tracking-tight text-light-blue-green"
            >
              That’s what Fair Game does.
            </motion.h2>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 mt-6 max-w-xl"
            >
              <div className="relative shrink-0 w-28 h-28 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full border border-deep-teal/30 scale-110 pointer-events-none" />
                <Image
                  src="/images/home-people.png"
                  alt="Fair Game founders and team"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <blockquote className="text-center sm:text-left">
                <p className="text-gray-300 text-sm sm:text-md leading-relaxed italic">
                  “We don’t produce ideas; we take real problems, understand them deeply and turn them into businesses built to succeed.”
                </p>
                <footer className="mt-2 text-xs uppercase tracking-widest text-gray-500">
                  Fair Game
                </footer>
              </blockquote>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.6, duration: 0.6 }}
              className="flex gap-10 pt-4 text-sm"
            >
              <div>
                <div className="text-light-blue-green font-semibold text-lg">
                  <CountUp to={7} />+
                </div>
                <div className="text-gray-500">Ventures Built</div>
              </div>
              <div>
                <div className="text-light-blue-green font-semibold text-lg">
                  <CountUp to={15} delay={0.2} />+
                </div>
                <div className="text-gray-500">Founders Supported</div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT — CIRCLES PLACEHOLDER (unchanged layout) */}
          <div className="hidden lg:block relative h-[600px]" />
        </div>
      </main>
    </div>
  );
};

export default Home;
