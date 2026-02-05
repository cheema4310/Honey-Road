import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { MenuCategory } from '../types';
import { Reveal } from './ui/Reveal';

const categories: MenuCategory[] = [
  {
    id: 'dips',
    title: 'Dips & Spreads',
    items: [
      {
        name: 'Tahini Hummus',
        description:
          'Chickpeas, tahini, lemon, garlic, served with wood-fired pita.',
        price: '12',
        tags: ['Vegan', 'GF Option'],
      },
      {
        name: 'Red Pepper Walnut Muhammara',
        description:
          'Roasted red peppers, walnuts, pomegranate molasses, aleppo pepper.',
        price: '14',
        tags: ['Vegan', 'Contains Nuts'],
      },
      {
        name: 'Baba Ganoush',
        description: 'Smoked eggplant, garlic, yogurt, olive oil, parsley.',
        price: '13',
        tags: ['Vegetarian', 'GF'],
      },
    ],
  },
  {
    id: 'mezze',
    title: 'Mezze',
    items: [
      {
        name: 'Braised Lamb Bun',
        description:
          'Spiced lamb shoulder, house pickles, garlic yogurt, steamed bun.',
        price: '16',
        tags: ['Signature'],
      },
      {
        name: 'Kale Salad',
        description:
          'Shredded kale, tahini dressing, crispy chickpeas, pickled onions.',
        price: '15',
        tags: ['Vegan', 'GF'],
      },
      {
        name: 'Sweet Harissa Chicken Wings',
        description:
          'Crispy wings, honey harissa glaze, cilantro, sesame seeds.',
        price: '17',
        tags: ['Spicy', 'GF'],
      },
      {
        name: 'Fried Cauliflower',
        description: 'Tahini, dukkah, herbs, lemon zest.',
        price: '14',
        tags: ['Vegan'],
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Sweets',
    items: [
      {
        name: 'Classic Walnut Baklava',
        description: 'Phyllo pastry, chopped walnuts, honey syrup, rose water.',
        price: '10',
        tags: ['Contains Nuts'],
      },
      {
        name: 'Coconut Tres Leches',
        description:
          'Sponge cake, coconut milk soak, whipped cream, toasted coconut.',
        price: '12',
        tags: ['Vegetarian'],
      },
      {
        name: 'Turkish Coffee Ice Cream',
        description:
          'Cardamom spiced coffee ice cream, dark chocolate shavings.',
        price: '9',
        tags: ['GF'],
      },
    ],
  },
];

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="menu" className="py-32 relative bg-[#1A1A1B]">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tighter">
              The Menu
            </h2>
            <p className="text-slate-400 font-sans max-w-xl mx-auto text-lg font-light">
              Small plates designed for sharing. Flavors inspired by the spices
              of the Eastern Mediterranean.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border
                  ${
                    activeTab === cat.id
                      ? 'bg-pink-500 text-white border-pink-500 shadow-[0_0_20px_-5px_rgba(255,57,152,0.5)]'
                      : 'bg-transparent text-white/40 border-white/5 hover:border-white/20 hover:text-white'
                  }
                `}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Menu Content - SaaS Grid */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          {categories.map(
            (cat) =>
              activeTab === cat.id && (
                <div
                  key={cat.id}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
                >
                  {cat.items.map((item, index) => (
                    <Reveal key={item.name} delay={index * 50}>
                      <GlassCard
                        className="h-full flex flex-col justify-between group cursor-default border-white/5 bg-white/[0.02]"
                        hoverEffect
                        spotlight
                      >
                        <div className="mb-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-serif text-white group-hover:text-pink-400 transition-colors tracking-tight">
                              {item.name}
                            </h3>
                            <span className="font-serif text-lg text-pink-500">
                              ${item.price}
                            </span>
                          </div>
                          <p className="text-slate-400 font-sans text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {item.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-bold tracking-wider text-white/30 border border-white/10 px-2 py-1 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </Reveal>
                  ))}
                </div>
              ),
          )}
        </div>

        {/* <div className="text-center mt-8">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            Menu subject to change based on seasonal availability.
          </p>
        </div> */}
      </div>
    </section>
  );
};
