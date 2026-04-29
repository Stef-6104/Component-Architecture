import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
    >
      <Image
        src="/assets/hero-bg.png"
        alt="Background gradient"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-6xl">
            Ronn Stephen
            <br />
            E. Manallo
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-9 text-zinc-100">
            Aim for the perfection and realization of personhood. When you
            realize nothing is lacking, the whole world belongs to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="outline"
              href="/contact"
              className="rounded-full border-white/20 bg-white text-xl font-semibold text-zinc-900 hover:bg-zinc-200"
            >
              Let&apos;s Talk
            </Button>
            <Button
              variant="outline"
              href="/projects"
              className="rounded-full"
            >
              Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] items-center justify-end lg:flex">
        <Image
          src="/assets/mirror.png"
          alt="Mirrored person illustration"
          width={980}
          height={980}
          priority
          className="h-auto w-full max-w-5xl object-contain opacity-95"
        />
      </div>
    </section>
  );
}
