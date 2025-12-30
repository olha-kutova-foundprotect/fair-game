'use client';

import Lottie from 'lottie-react';
import animationData from '@/animations/unicorn.json';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHeaderTheme } from '@/components/header/HeaderThemeContext';

type Props = {
  onFinish: () => void;
};

const STARS = [
  // existing ~30
  { t: '8%', l: '12%', d: 0 },
  { t: '10%', l: '40%', d: 0.3 },
  { t: '12%', l: '68%', d: 0.6 },
  { t: '15%', l: '85%', d: 0.9 },
  { t: '22%', l: '18%', d: 1.2 },
  { t: '25%', l: '35%', d: 0.4 },
  { t: '28%', l: '55%', d: 0.8 },
  { t: '30%', l: '75%', d: 1.4 },
  { t: '32%', l: '92%', d: 0.6 },
  { t: '40%', l: '10%', d: 1.1 },
  { t: '42%', l: '28%', d: 0.2 },
  { t: '45%', l: '48%', d: 0.9 },
  { t: '48%', l: '66%', d: 0.5 },
  { t: '50%', l: '85%', d: 1.3 },
  { t: '58%', l: '15%', d: 0.7 },
  { t: '60%', l: '32%', d: 1.5 },
  { t: '62%', l: '52%', d: 0.4 },
  { t: '65%', l: '72%', d: 1.1 },
  { t: '68%', l: '90%', d: 0.8 },
  { t: '75%', l: '20%', d: 1.2 },
  { t: '78%', l: '40%', d: 0.3 },
  { t: '80%', l: '60%', d: 1.4 },
  { t: '82%', l: '78%', d: 0.6 },
  { t: '88%', l: '25%', d: 0.9 },
  { t: '90%', l: '50%', d: 1.3 },
  { t: '92%', l: '75%', d: 0.5 },

  // +60 more
  { t: '6%', l: '5%', d: 0.1 },
  { t: '7%', l: '25%', d: 0.8 },
  { t: '9%', l: '55%', d: 1.1 },
  { t: '11%', l: '78%', d: 0.4 },
  { t: '14%', l: '95%', d: 1.6 },

  { t: '18%', l: '8%', d: 0.6 },
  { t: '19%', l: '48%', d: 1.4 },
  { t: '21%', l: '88%', d: 0.9 },

  { t: '26%', l: '5%', d: 1.2 },
  { t: '27%', l: '22%', d: 0.3 },
  { t: '29%', l: '62%', d: 1.5 },
  { t: '31%', l: '98%', d: 0.7 },

  { t: '34%', l: '14%', d: 0.4 },
  { t: '36%', l: '38%', d: 1.3 },
  { t: '37%', l: '82%', d: 0.6 },

  { t: '44%', l: '5%', d: 1.1 },
  { t: '46%', l: '22%', d: 0.2 },
  { t: '47%', l: '92%', d: 1.4 },

  { t: '53%', l: '7%', d: 0.8 },
  { t: '54%', l: '42%', d: 1.6 },
  { t: '56%', l: '98%', d: 0.5 },

  { t: '63%', l: '5%', d: 1.3 },
  { t: '64%', l: '28%', d: 0.4 },
  { t: '66%', l: '58%', d: 1.2 },
  { t: '67%', l: '88%', d: 0.7 },

  { t: '71%', l: '10%', d: 1.5 },
  { t: '73%', l: '48%', d: 0.3 },
  { t: '74%', l: '95%', d: 1.1 },

  { t: '79%', l: '5%', d: 0.9 },
  { t: '81%', l: '32%', d: 1.4 },
  { t: '83%', l: '92%', d: 0.6 },

  { t: '86%', l: '10%', d: 1.2 },
  { t: '87%', l: '42%', d: 0.4 },
  { t: '89%', l: '62%', d: 1.6 },
  { t: '91%', l: '95%', d: 0.8 },

  { t: '94%', l: '15%', d: 1.3 },
  { t: '96%', l: '48%', d: 0.5 },
  { t: '98%', l: '82%', d: 1.1 },
];


export default function IntroAnimation({ onFinish }: Props) {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme('light');
    return () => setTheme('dark');
  }, [setTheme]);

  return (
    <section className="fixed inset-0 z-40 bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* ✨ STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{ top: s.t, left: s.l }}
            initial={{ opacity: 0.4, scale: 0.8 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.6, 0.8] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: s.d,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* 🦄 Unicorn */}
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
        className="relative z-10 w-[320px] sm:w-[420px] md:w-[520px]"
        onComplete={onFinish}
      />

      {/* Text */}
      <p className="relative z-10 mt-8 text-2xl font-medium tracking-wide text-white">
        Magic starts here…
      </p>
    </section>
  );
}
