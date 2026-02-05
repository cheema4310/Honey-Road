import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Take Out',
      href: 'https://order.toasttab.com/online/honey-road-156-church-street',
    },
    { name: 'Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Team', href: '#team' },
    { name: 'Visit', href: '#reservations' },
    {
      name: 'Gift Card',
      href: 'https://swipeit.com/co-branded/merchant/honey-road-restaurant-10128',
    },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={`
            relative flex items-center justify-between gap-8 px-6 py-3
            bg-charcoal/70 backdrop-blur-xl border border-white/10
            rounded-full shadow-2xl transition-all duration-500
            ${isScrolled ? 'w-auto' : 'w-full max-w-5xl'}
          `}
        >
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5957ae9ee110eba6435036aa/d5a9cb32-4db4-4b6b-9846-d08053dcdf98/HoneyRoad_Eye_2.png?format=2500w"
              alt="Honey Road Eye"
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-white/60 hover:text-pink-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://resy.com/cities/burlington-vt/venues/honey-road?seats=2"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold text-[10px] tracking-widest uppercase rounded-full transition-all shadow-[0_0_20px_-5px_rgba(255,57,152,0.5)] hover:shadow-[0_0_25px_-5px_rgba(255,57,152,0.7)]"
            >
              Reserve
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-white/80 hover:text-pink-500 transition-colors"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0B0B0C] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isMobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-3xl font-serif text-white hover:text-pink-500 transition-colors tracking-tight"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://resy.com/cities/burlington-vt/venues/honey-road?seats=2"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 bg-pink-500 text-white font-bold tracking-widest uppercase rounded-full"
        >
          Book Table
        </a>
      </div>
    </>
  );
};
