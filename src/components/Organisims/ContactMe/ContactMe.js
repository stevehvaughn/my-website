import { useState } from 'react';
import styles from "./ContactMe.module.scss";

const ContactMe = ({ heading, subtitle }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormFilledOut = form.name && form.email && form.message && !isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to an API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form }),
      });

      if (response.ok) {
        setSuccessMessage("Email has been sent! ✉️🎉 I'll be in touch soon!");
        setForm({ name: '', email: '', message: ''});
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <section className={`add-top add-bottom ${styles.contact_me_section}`}>
      <h2>{heading}</h2>
      <p>{subtitle}</p>
      <form onSubmit={handleSubmit} className={styles.contact_me_form}>
        <div className={styles.form_group_top}>
          <div className={styles.form_item}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={form.name}
              placeholder="Full Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="name@me.com"
              required
            />
          </div>
        </div>
        <div className={styles.form_group_bottom}>
          <div className={styles.form_item}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={form.message}
              placeholder="Hey Steve, I'm reaching out because…"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
        </div>
        <button type="submit" disabled={!isFormFilledOut}>{isSubmitting ? 'Sending...' : 'Submit'}</button>
        <div className={styles.form_status_wrapper}>
          {successMessage && <p className={[styles.success, styles.submit_message].join(' ')} role="alert" aria-live="assertive">{successMessage}</p>}
          {errorMessage && <p className={[styles.error, styles.submit_message].join(' ')} role="alert" aria-live="assertive">{errorMessage}</p>}
        </div>
      </form>
    </section >
  );
};

export default ContactMe;
