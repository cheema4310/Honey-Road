import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Reservations: React.FC = () => {
  return (
    <section id="reservations" className="relative py-32 flex items-center justify-center bg-[#1A1A1B] overflow-hidden">
      {/* Background Image Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/id/431/1920/1080')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-[#1A1A1B]/90 to-transparent"></div>
      
      <div className="container relative z-10 px-4">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* CTA Card (Left) */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <GlassCard className="flex-1 flex flex-col justify-center items-center text-center py-12 px-6 border-white/10 bg-[#1A1A1B]/60 backdrop-blur-md" spotlight>
                <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mb-8">
                    <Calendar className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="font-serif text-4xl text-white mb-4 tracking-tighter">Reservations</h2>
                <p className="text-slate-400 mb-10 max-w-xs text-sm leading-relaxed mx-auto">
                  We recommend booking in advance, especially for weekend dining.
                </p>
                <a 
                  href="https://resy.com/cities/burlington-vt/venues/honey-road?seats=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[200px] py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_30px_-10px_rgba(255,57,152,0.6)] transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Table
                </a>
              </GlassCard>
            </div>

            {/* Location Suite (Right) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                
                {/* Map Container - Engineered for Robustness */}
                <div className="relative w-full h-[450px] min-h-[400px] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  {/* Iframe */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8833!2d-73.2127!3d44.4759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc34f78902bd71%3A0xd8965e0e6990c594!2s156%20Church%20St%2C%20Burlington%2C%20VT%2005401!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '400px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Honey Road Location"
                    className="absolute inset-0 w-full h-full filter grayscale invert contrast-[0.85] brightness-[0.8] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  ></iframe>

                  {/* External Link Overlay Button */}
                  <a 
                    href="https://maps.app.goo.gl/F6XvT1L2A9uV7XQ7A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all shadow-xl flex items-center gap-2 z-10"
                  >
                    <Navigation size={14} />
                    Open in Maps
                  </a>

                  {/* Fallback Visual Elements (Masking) */}
                  <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl ring-1 ring-white/5"></div>
                </div>
                
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard className="flex flex-col gap-1 border-white/10 py-8 px-8 bg-[#1A1A1B]/60" spotlight>
                         <div className="flex items-center gap-3 mb-2">
                             <MapPin className="text-pink-500 w-5 h-5" />
                             <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">Visit Us</span>
                         </div>
                         <h3 className="font-serif text-white text-xl tracking-tight">156 Church Street</h3>
                         <p className="text-slate-400 text-sm">Burlington, VT 05401</p>
                    </GlassCard>

                     <GlassCard className="flex flex-col gap-1 border-white/10 py-8 px-8 bg-[#1A1A1B]/60" spotlight>
                         <div className="flex items-center gap-3 mb-2">
                             <Clock className="text-pink-500 w-5 h-5" />
                             <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">Opening Hours</span>
                         </div>
                         <h3 className="font-serif text-white text-xl tracking-tight">Daily: 4pm – 9pm</h3>
                         <p className="text-slate-400 text-sm">Happy Hour: 4:00 PM – 5:30 PM</p>
                    </GlassCard>
                </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};