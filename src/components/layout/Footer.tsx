import Image from 'next/image';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M12 2C6.477 2 2 6.58 2 12.26c0 4.56 2.865 8.43 6.84 9.8.5.1.682-.22.682-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.9 1.58 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.16-4.55-5.17 0-1.14.4-2.07 1.05-2.8-.1-.26-.46-1.35.1-2.82 0 0 .86-.28 2.82 1.06.82-.24 1.7-.36 2.57-.36.87 0 1.75.12 2.57.36 1.96-1.34 2.82-1.06 2.82-1.06.56 1.47.2 2.56.1 2.82.65.73 1.05 1.66 1.05 2.8 0 4.02-2.33 4.9-4.56 5.16.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49 3.97-1.37 6.84-5.24 6.84-9.8C22 6.58 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.264 2.37 4.264 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M18.244 2H21l-6.534 7.471L22 22h-6.175l-4.83-6.536L4.3 22H1.54l7.035-8.04L2 2h6.31l4.364 5.9L18.244 2zm-1.084 19.36h1.542L7.48 3.57H5.83l11.33 17.79z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/assets/logo-footer.png"
              alt="Zen Space footer logo"
              width={72}
              height={72}
              className="h-auto w-14"
              priority
            />
            <p className="mt-4 text-sm text-zinc-600">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Contact
              </h3>
              <a
                className="mt-2 inline-block text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
                href="mailto:ronnmanallo787@gmail.com"
              >
                ronnmanallo787@gmail.com
              </a>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="text-sm font-semibold text-zinc-900">
              Follow
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
