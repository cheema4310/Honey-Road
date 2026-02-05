import React from 'react';
import { Reveal } from './ui/Reveal';

export const Atmosphere: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcr0te1k4/image/upload/v1770277605/honey-road_n7mi5i.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Reveal>
          <blockquote className="font-serif text-3xl md:text-5xl italic text-white leading-tight">
            "A bustling hive of <span className="text-pink-500">warmth</span>,{' '}
            <span className="text-pink-500">spice</span>, and shared{' '}
            <span className="text-pink-500">joy</span>."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
};
