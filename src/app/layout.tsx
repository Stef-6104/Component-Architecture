import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Zen Space Portfolio',
  description: 'Personal portfolio of Ronn Stephen E. Manallo',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
