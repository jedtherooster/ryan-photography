import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar__logo">Ryan Photography · Christchurch</div>

      <nav className="navbar__links">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => handleScroll(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>

      <button
        className={`navbar__menu-toggle ${open ? 'navbar__menu-toggle--open' : ''}`}
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="navbar__menu-bar" />
        <span className="navbar__menu-bar" />
        <span className="navbar__menu-bar" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="nav-overlay__panel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="nav-overlay__link"
                  onClick={() => handleScroll(item.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

