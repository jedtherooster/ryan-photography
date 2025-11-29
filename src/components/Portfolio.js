import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client } from '../sanityClient';

export const Portfolio = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const query = `*[_type == "portfolioImage"] | order(_createdAt desc)[0...15]{
      _id,
      title,
      description,
      category,
      "url": mainImage.asset->url
    }`;

    client
      .fetch(query)
      .then((data) => setPhotos(data))
      .catch((err) => {
        console.error(err);
        setPhotos([]);
      });
  }, []);

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
    </section>
  );
};
