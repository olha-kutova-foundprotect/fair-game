'use client';

import { createContext, useContext, useState } from 'react';

type HeaderTheme = 'light' | 'dark';

type HeaderThemeContextType = {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
};

const HeaderThemeContext = createContext<HeaderThemeContextType | null>(null);

export function HeaderThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<HeaderTheme>('dark'); // default for Home

  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  const ctx = useContext(HeaderThemeContext);
  if (!ctx) {
    throw new Error('useHeaderTheme must be used within HeaderThemeProvider');
  }
  return ctx;
}
