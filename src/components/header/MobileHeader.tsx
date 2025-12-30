'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  X,
  Menu,
  Home,
  Info,
  Users,
  Briefcase,
  Mail,
} from 'lucide-react';
import Logo from '@/components/logo/Logo';
import { appRoutes } from '@/constants/appRoutes';
import { useHeaderTheme } from './HeaderThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme } = useHeaderTheme();
  const isLight = theme === 'light';

  const navLinks = [
    { href: appRoutes.home, label: 'Home', icon: Home },
    { href: appRoutes.about, label: 'About', icon: Info },
    { href: appRoutes.team, label: 'Team', icon: Users },
    { href: appRoutes.portfolio, label: 'Portfolio', icon: Briefcase },
    { href: appRoutes.contact, label: 'Contact', icon: Mail },
  ];

  const handleNavigate = (href: string) => {
    setOpen(false);
    setTimeout(() => router.push(href), 300);
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 w-full z-[100] sm:hidden">
        <div className="flex items-center justify-between px-6 py-6">
          <Logo variant={isLight ? 'dark' : 'light'} size={110} />

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-white"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] bg-black sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {/* Top */}
            <div className="flex items-center justify-between px-6 py-6">
              <Logo variant="light" size={110} />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <X size={26} />
              </button>
            </div>

            {/* Links */}
            <nav className="px-6 pt-6 space-y-6 text-white">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <button
                  key={href}
                  onClick={() => handleNavigate(href)}
                  className="flex items-center gap-4 text-lg font-medium tracking-wide"
                >
                  <Icon size={20} className="opacity-80" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
