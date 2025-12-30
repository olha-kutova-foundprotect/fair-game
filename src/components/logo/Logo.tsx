import Image from 'next/image';
import Link from 'next/link';
import { appRoutes } from '@/constants/appRoutes';

type LogoProps = {
  size?: number;
  priority?: boolean;
  variant?: 'light' | 'dark';
};

export default function Logo({
  size = 110,
  priority = false,
  variant = 'light',
}: LogoProps) {
  const src =
    variant === 'light'
      ? '/images/logo-w.png'
      : '/images/logo-w.png';

  return (
    <Link
      href={appRoutes.home}
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
      aria-label="Go to homepage"
    >
      <Image
        src={src}
        alt="Logo"
        width={size}
        height={size}
        priority={priority}
      />
    </Link>
  );
}
