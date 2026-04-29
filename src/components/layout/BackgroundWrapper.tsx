import Image from 'next/image';
import type { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function BackgroundWrapper({
  children,
  className = '',
}: BackgroundWrapperProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/assets/hero-bg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

