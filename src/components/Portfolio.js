import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { client } from '../sanityClient';

export const Portfolio = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const query = `*[_type == "portfolioImage" && defined(mainImage)] | order(_createdAt desc)[0...15]{
      _id,
      title,
      description,
      category,
      "url": mainImage.asset->url
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log('Portfolio data fetched:', data);
        setPhotos(data);
      })
      .catch((err) => {
        console.error('Error fetching portfolio:', err);
        setPhotos([]);
      });
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    if (selectedPhoto) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Portfolio</h2>
          <p className="section__subtitle">
            A selection of recent work from events, portraits and commercial shoots across
            Christchurch.
          </p>
        </motion.div>

        {photos.length === 0 && (
          <p className="section__note">
            Your Sanity portfolio is not connected yet. Once you add images in Sanity, they will
            appear here automatically.
          </p>
        )}

        <div className="portfolio-grid">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo._id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              {photo.url && (
                <div className="portfolio-item__image-wrapper">
                  <img
                    src={photo.url}
                    alt={photo.title || 'Portfolio image'}
                    className="portfolio-item__image"
                  />
                </div>
              )}
              {(photo.title || photo.category) && (
                <figcaption className="portfolio-item__caption">
                  {photo.category && (
                    <span className="portfolio-item__tag">{photo.category}</span>
                  )}
                  {photo.title && <h3 className="portfolio-item__title">{photo.title}</h3>}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox__close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              {selectedPhoto.url && (
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title || 'Portfolio image'}
                  className="lightbox__image"
                />
              )}
              {(selectedPhoto.title || selectedPhoto.description) && (
                <div className="lightbox__info">
                  {selectedPhoto.title && (
                    <h3 className="lightbox__title">{selectedPhoto.title}</h3>
                  )}
                  {selectedPhoto.description && (
                    <p className="lightbox__description">{selectedPhoto.description}</p>
                  )}
                  {selectedPhoto.category && (
                    <span className="lightbox__tag">{selectedPhoto.category}</span>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
