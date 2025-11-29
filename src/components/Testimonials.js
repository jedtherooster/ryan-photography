import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Expects a Sanity schema type called "testimonial"
    // with fields: name, role, quote.
    const query = `*[_type == "testimonial"] | order(_createdAt desc)[0...6]{
      _id,
      name,
      role,
      quote
    }`;

    client
      .fetch(query)
      .then((data) => setTestimonials(data))
      .catch((err) => {
        console.error(err);
        setTestimonials([]);
      });
  }, []);

  const hasData = testimonials.length > 0;

  const fallback = [
    {
      _id: 'fallback-1',
      name: 'Head of Sixth Form',
      role: 'School Prom Organiser',
      quote:
        'Professional, reliable and fantastic with the students. The photos were delivered quickly and looked amazing.',
    },
    {
      _id: 'fallback-2',
      name: 'Emma',
      role: '18th Birthday Party',
      quote:
        'Captured all the little moments I would have missed. Everyone commented on how friendly and unobtrusive the photographer was.',
    },
    {
      _id: 'fallback-3',
      name: 'Jake',
      role: 'Small Business Owner',
      quote:
        'The new headshots and product photos have completely lifted my website and social media pages.',
    },
  ];

  const displayTestimonials = hasData ? testimonials : fallback;

  return (
    <section id="testimonials" className="section section--light">
      <div className="section__inner">
        <h2 className="section__title">Testimonials</h2>
        <p className="section__subtitle">
          What students, parents and teachers say about working together.
        </p>
        <div className="cards cards--three">
          {displayTestimonials.map((t) => (
            <article key={t._id} className="card card--quote">
              <p className="card__quote">“{t.quote}”</p>
              <p className="card__name">{t.name}</p>
              {t.role && <p className="card__role">{t.role}</p>}
            </article>
          ))}
        </div>
        {!hasData && (
          <p className="section__note">
            These are example testimonials. Add real testimonials in Sanity to replace them.
          </p>
        )}
      </div>
    </section>
  );
};


