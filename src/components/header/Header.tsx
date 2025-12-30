'use client';

import DesktopHeader from '@/components/header/DesktopHeader';
import MobileHeader from '@/components/header/MobileHeader';

export default function Header() {
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-[200]">
        <MobileHeader />
      </div>

      {/* Desktop */}
      <div className="hidden sm:block fixed top-0 left-0 w-full z-[200]">
        <DesktopHeader />
      </div>
    </>
  );
}
