import { siteContent } from '@/content/site';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="block h-auto w-full scale-[1.02]"
        style={{ filter: 'blur(6px)' }}
        src="/hero-video.mp4"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center text-surface">
          <h1 className="text-4xl font-normal tracking-wide md:text-5xl">
            {siteContent.hero.headline}
          </h1>
          <div className="my-4 border-t border-surface" />
          <p className="text-base font-light tracking-widest md:text-lg">
            {siteContent.hero.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
