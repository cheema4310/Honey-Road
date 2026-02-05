import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#151515] border-t border-white/5 pt-16 pb-8 px-8"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white mb-4">
              HONEY <span className="text-pink-500">ROAD</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Eastern Mediterranean Mezze & Small Plates.
              <br />
              Women-owned. Locally sourced.
            </p>
            <p className="text-white/50 text-xs font-bold leading-relaxed max-w-xs mx-auto md:mx-0">
              <br />
              156 Church Street, Burlington
              <br />
              VT, 05401, United States
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-pink-500 uppercase tracking-widest text-xs font-bold mb-6">
              Get in Touch
            </h4>
            <a
              href="tel:802-497-2145"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-white mb-2 transition-colors"
            >
              <Phone size={16} /> 802-497-2145
            </a>
            <a
              href="mailto:hello@honeyroad.com"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Mail size={16} /> info@honeyroadrestaurant.com
            </a>
          </div>

          {/* Social / Newsletter */}
          <div className="text-center md:text-right">
            <h4 className="text-pink-500 uppercase tracking-widest text-xs font-bold mb-6">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-end gap-6 mb-6">
              <a
                href="https://www.instagram.com/honeyroadrestaurant"
                className="text-white/60 hover:text-pink-500 transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="https://www.instagram.com/honeyroadrestaurant"
                className="text-white/60 hover:text-pink-500 transition-colors"
              >
                <Facebook />
              </a>
            </div>

            <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-end">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors placeholder:text-white/20"
              />
              <button className="bg-white/10 hover:bg-pink-500 hover:text-white text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-white/20 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Honey Road. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
