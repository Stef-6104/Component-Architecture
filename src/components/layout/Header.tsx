'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { NavigationItem } from '../../lib/types';
import Navigation from './Navigation';

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 transition-colors ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md' : 'bg-zinc-950/55'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo-lotus.png"
            alt="Zen Space logo"
            width={34}
            height={34}
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide text-white">
            Zen Space
          </span>
        </Link>

        <Navigation
          items={navigationItems}
          activeHref={pathname}
        />

        <button
          type="button"
          className="inline-flex items-center rounded-md p-2 text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 px-4 py-4 md:hidden">
          <Navigation
            items={navigationItems}
            mobile
            onNavigate={() => setIsMenuOpen(false)}
            activeHref={pathname}
          />
        </div>
      ) : null}
    </header>
  );
}
