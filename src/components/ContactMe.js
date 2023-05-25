import { useState } from 'react';
import styles from "@styles/ContactMe.module.scss";

const ContactMe = ({ heading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here (e.g., sending data to a backend server or a third-party service)

    try {
      // Example: Send form data to an API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccessMessage("Email has been sent! ✉️🎉 I'll be in touch soon!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <section className={styles.contact_me_section}>
      <h2>{heading}</h2>
      <form onSubmit={handleSubmit} className={styles.contact_me_form}>
        <div className={styles.form_group_top}>
          <div className={styles.form_item}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            />
          </div>
        </div>
        <div className={styles.form_group_bottom}>
          <div className={styles.form_item}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">{isSubmitting ? 'Sending...' : 'Send! ✉️'}</button>
      </form>
      {successMessage && <p className={[styles.success, styles.submit_message].join(' ')}>{successMessage}</p>}
      {errorMessage && <p className={[styles.error, styles.submit_message].join(' ')}>{errorMessage}</p>}
    </section>
  );
};

export default ContactMe;