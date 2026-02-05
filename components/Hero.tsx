import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/1741118426017-QPZBYF35OJ7S6ATJ74WR/teig_180404_2246.jpg?format=2500w')` }} 
      >
         <div className="absolute inset-0 bg-[#0B0B0C]/40" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-pink-400 font-sans text-[10px] font-bold tracking-[0.2em] uppercase">
                Est. 2017 • Burlington, Vermont
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-none tracking-tighter drop-shadow-2xl">
              HONEY <span className="text-pink-500">ROAD</span>
            </h1>
            
            <p className="font-sans text-slate-300 text-lg md:text-2xl font-light tracking-tight mb-12 max-w-xl mx-auto leading-relaxed">
              Eastern Mediterranean Mezze & Small Plates.<br />
              Crafted with local heart and bold spice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://resy.com/cities/burlington-vt/venues/honey-road?seats=2"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-pink-500 text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 rounded-full bg-pink-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <span className="relative">Book a Table</span>
              </a>
              <a 
                href="#menu" 
                className="px-10 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-widest transition-all backdrop-blur-md"
              >
                View Menu
              </a>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};