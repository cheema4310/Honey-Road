import React from 'react';
import { Reveal } from './ui/Reveal';

const teamMembers = [
  {
    name: 'Cara Tobin',
    role: 'Executive Chef / Owner',
    image: 'https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/b438fccb-936c-49dc-95c3-b9cbcef1a481/cara+crop.jpg?format=1000w'
  },
  {
    name: 'Allison Gibson',
    role: 'General Manager / Owner',
    image: 'https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/3a3f33fc-0dd7-4958-8a9e-63876388b732/teig_180404_2184.jpg?format=1000w'
  },
  {
    name: 'Jessilee Gross',
    role: 'Chef de Cuisine',
    image: 'https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/7b81eca2-e4dc-4442-8468-4c3dd3df0a1c/220319-Grey-Jay-004.jpg?format=750w'
  },
  {
    name: 'Amanda Wildermuth',
    role: 'Pastry Chef',
    image: 'https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/3288bb56-71ce-4aef-9709-19b6d9275041/220319-Grey-Jay-037.jpg?format=750w'
  },
  {
    name: 'Dana Parseliti',
    role: 'Wine Buyer',
    image: 'https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/957ae37f-845e-4bae-a8e2-1ca0d479b15c/220319-Grey-Jay-026.jpg?format=750w'
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-[#1A1A1B] relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="block text-pink-500 font-sans text-xs uppercase tracking-[0.2em] mb-4">The People</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tighter">The Curators</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-white/5">
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Info Card (Frosted Glass Footer) */}
                <div className="absolute bottom-4 left-4 right-4 p-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg text-white mb-1 tracking-tight">{member.name}</h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-pink-400 font-bold">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};