import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero__eyebrow">Ryan Photography · Christchurch, NZ</p>
          <h1 className="hero__title">Event photography that captures the moment.</h1>
          <p className="hero__subtitle">
            I&apos;m Ryan, a photographer based in Christchurch specialising in school events, parties
            and small business content. I focus on clean, natural images that feel authentic and
            professional.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Book a shoot
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              View portfolio
            </a>
          </div>
          <p className="hero__note">
            Available evenings and weekends for formals, graduations, birthdays, launches and more.
          </p>
        </motion.div>

        <motion.div
          className="hero__image"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__image-wrapper">
            <img
              src="\images\_DSC0715.jpg"
              alt="Event photography by Ryan Photography"
              className="hero__image-main"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
