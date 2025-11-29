import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' },
  }),
};

export const Services = () => {
  return (
    <section id="services" className="section section--light">
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="section__title">What I can help with</h2>
          <p className="section__subtitle">
            Simple, flexible coverage for Christchurch schools, families and small businesses.
          </p>
        </motion.div>

        <div className="cards">
          {[
            {
              title: 'School events & formals',
              body: 'Formals, award evenings, sports days and concerts with a calm, organised approach so staff and students feel looked after.',
              points: [
                'Coverage tailored to your schedule',
                'Posed groups plus natural in-between moments',
                'Easy-to-share online galleries for students and whānau',
              ],
            },
            {
              title: 'Parties & milestones',
              body: 'Birthdays, graduations and family gatherings captured in a relaxed, documentary style so you can stay in the moment.',
              points: [
                'Candid storytelling with a few relaxed portraits',
                'Highlight reel ready for Instagram and prints',
                'Options for short or longer coverage',
              ],
            },
            {
              title: 'Brand & content sessions',
              body: 'Clean, consistent imagery for local brands who need to look put-together online without feeling too stiff.',
              points: [
                'Headshots that still feel like you',
                'On-location content around Christchurch',
                'Files delivered ready for web and social',
              ],
            },
          ].map((service, index) => (
            <motion.article
              key={service.title}
              className="card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ul>
                {service.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

