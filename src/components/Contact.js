import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // For now, this just simulates a send. You can plug this into EmailJS,
    // a serverless function or your own backend later.
    setTimeout(() => {
      setStatus('success');
      setForm({
        name: '',
        email: '',
        eventType: '',
        date: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="section__inner section__inner--split">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="section__title">Let&apos;s plan your next photos</h2>
          <p className="section__subtitle">
            Share a few details about your event or project in Christchurch and I&apos;ll reply with
            availability, ideas and pricing options.
          </p>
          <p className="section__note">
            Prefer email? You can also reach me at <strong>hello@ryanphotography.nz</strong>.
          </p>
        </motion.div>

        <motion.form
          className="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div className="form__group form__group--half">
            <div>
              <label htmlFor="eventType">Event type</label>
              <input
                id="eventType"
                name="eventType"
                type="text"
                value={form.eventType}
                onChange={handleChange}
                placeholder="Prom, birthday, business, etc."
              />
            </div>
            <div>
              <label htmlFor="date">Event date (if known)</label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Share any details like location, timings and what style of photos you like."
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
          </button>

          {status === 'success' && (
            <p className="form__success">Thanks for your message! I&apos;ll reply as soon as I can.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};
