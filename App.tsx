import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Atmosphere } from './components/Atmosphere';
import { Menu } from './components/Menu';
import { Team } from './components/Team';
import { Reservations } from './components/Reservations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1B] text-white selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Atmosphere />
        <Menu />
        <Team />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}

export default App;