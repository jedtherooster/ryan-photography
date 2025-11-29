import './App.css';
import React from 'react';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <div className="section-wrap">
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ryan Photography · Christchurch, New Zealand.</p>
      </footer>
    </div>
  );
}

export default App;

