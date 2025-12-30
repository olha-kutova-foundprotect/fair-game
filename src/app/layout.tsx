import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { HeaderThemeProvider } from '@/components/header/HeaderThemeContext';
import './globals.css';
import React from 'react';
import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderThemeProvider>
          <Header />
          {children}
        </HeaderThemeProvider>
      </body>
    </html>
  );
}
