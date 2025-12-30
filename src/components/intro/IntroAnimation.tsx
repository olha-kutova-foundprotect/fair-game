'use client';

import Lottie from 'lottie-react';
import animationData from '@/animations/unicorn.json';
import { useEffect } from 'react';
import { useHeaderTheme } from '@/components/header/HeaderThemeContext';

type Props = {
  onFinish: () => void;
};

export default function IntroAnimation({ onFinish }: Props) {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme('light');
    return () => setTheme('dark');
  }, [setTheme]);

  return (
    <section className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center">
      {/* 🦄 Unicorn (smaller) */}
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
        className="w-[160px] sm:w-[200px] md:w-[240px]"
        onComplete={onFinish}
      />

      {/* Text */}
      <p className="mt-6 text-xl font-medium tracking-wide text-white">
        Magic starts here…
      </p>
    </section>
  );
}
