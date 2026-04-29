import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Ronn Stephen E. Manallo | Zen Space Portfolio',
  description:
    'A personal portfolio showcasing software development, research, and user-centric digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white antialiased scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
