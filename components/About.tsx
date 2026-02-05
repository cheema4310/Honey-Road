import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Award, Wheat, Flame } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-[#1A1A1B]">
      {/* Decorative blobs */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="h-72 md:h-96 bg-cover bg-center rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 ease-out" style={{ backgroundImage: "url('https://picsum.photos/id/1060/600/800')" }}></div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-72 md:h-96 bg-cover bg-center rounded-3xl mt-16 grayscale hover:grayscale-0 transition-all duration-700 ease-out" style={{ backgroundImage: "url('https://picsum.photos/id/429/600/800')" }}></div>
            </Reveal>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <span className="text-pink-500 uppercase tracking-widest text-xs font-bold mb-4 block">The Experience</span>
              
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-[1.1] tracking-tighter">
                Women-Owned. <br/>
                <span className="text-pink-500">James Beard</span> Recognized.
              </h2>
            </Reveal>

            <Reveal delay={100}>
               <GlassCard className="mb-10" spotlight>
                 <div className="flex items-start gap-6">
                    <div className="p-3 bg-pink-500/10 rounded-2xl">
                      <Award className="text-pink-500 w-8 h-8" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-serif text-white mb-2 tracking-tight">4x James Beard Finalist</h3>
                       <p className="text-slate-400 font-sans leading-relaxed text-sm md:text-base">
                         Led by Chef Cara Tobin and Allison Gibson, Honey Road has consistently been recognized for outstanding hospitality and culinary excellence in the Northeast.
                       </p>
                    </div>
                 </div>
               </GlassCard>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-slate-300 font-sans text-lg leading-relaxed mb-8 font-light">
                We bring the vibrant flavors of the Eastern Mediterranean to the heart of Burlington. 
                Our menu is a celebration of bold spices like <span className="text-pink-400 font-medium">Sumac</span>, <span className="text-pink-400 font-medium">Za'atar</span>, and <span className="text-pink-400 font-medium">Harissa</span>, paired beautifully with the freshest Vermont produce.
              </p>
              
              <div className="flex gap-8 border-t border-white/5 pt-8">
                <div className="flex items-center gap-3 text-slate-400">
                   <Wheat size={18} className="text-pink-500" />
                   <span className="text-xs uppercase tracking-widest font-bold">Local Produce</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                   <Flame size={18} className="text-burnt-500" />
                   <span className="text-xs uppercase tracking-widest font-bold">Wood Fired</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};