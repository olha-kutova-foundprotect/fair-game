'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/logo/Logo';
import { appRoutes } from '@/constants/appRoutes';
import { useHeaderTheme } from './HeaderThemeContext';

export default function DesktopHeader() {
  const pathname = usePathname();
  const { theme } = useHeaderTheme();

  const navLinks = [
    { href: appRoutes.home, label: 'Home' },
    { href: appRoutes.about, label: 'About' },
    { href: appRoutes.team, label: 'Team' },
    { href: appRoutes.portfolio, label: 'Portfolio' },
    { href: appRoutes.contact, label: 'Contact' },
  ];

  const isLight = theme === 'light';

  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-[1200px] 2xl:max-w-[1800px] mx-auto px-6 py-6 flex items-center justify-between">
        <Logo variant={isLight ? 'dark' : 'light'} priority />

        <nav className="flex items-center gap-10">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold uppercase tracking-wide ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
