import type { Metadata } from 'next';
import { Geist, Geist_Mono, DM_Serif_Display } from 'next/font/google';
import { HeaderThemeProvider } from '@/components/header/HeaderThemeContext';
import Header from '@/components/header/Header';
import './globals.css';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dmSerif = DM_Serif_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fair Game',
  description:
    'Bringing genuine, talented and passionate people together to build businesses that truly revolutionise their sector is what FGV is all about.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable}`}
    >
    <body className="antialiased">
    <HeaderThemeProvider>
      <Header />
      {children}
    </HeaderThemeProvider>
    </body>
    </html>
  );
}
