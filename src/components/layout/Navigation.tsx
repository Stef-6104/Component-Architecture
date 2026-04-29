import Link from 'next/link';
import type { NavigationItem } from '../../lib/types';

interface NavigationProps {
  items: NavigationItem[];
  onNavigate?: () => void;
  onLinkClick?: (href: string) => void;
  mobile?: boolean;
  activeHref?: string;
}

export default function Navigation({
  items,
  onNavigate,
  onLinkClick,
  mobile = false,
  activeHref,
}: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul
        className={
          mobile
            ? 'flex flex-col gap-4'
            : 'hidden items-center gap-8 md:flex'
        }
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => {
                onLinkClick?.(item.href);
                onNavigate?.();
              }}
              aria-current={activeHref === item.href ? 'page' : undefined}
              className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                activeHref === item.href
                  ? 'font-semibold text-white'
                  : 'font-medium text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
