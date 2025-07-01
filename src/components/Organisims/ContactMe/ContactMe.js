import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from "./ContactMe.module.scss";

const ContactMe = ({ heading, subtitle }) => {
  const FORM_DEFAULT = {
    name: '',
    email: '',
    message: '',
    captchaToken: '',
  };

  const [formData, setFormData] = useState(FORM_DEFAULT);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isFormFilledOut = formData.name && formData.email && formData.message && !isSubmitting;

  // Create a ref for the reCAPTCHA widget
  const recaptcha = useRef(null);

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
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        setSuccessMessage("Email has been sent! ✉️🎉 I'll be in touch soon!");
        setFormData(FORM_DEFAULT);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
    setIsSubmitting(false);
  };

  const onCaptchaChange = (token) => {
    if (token) {
      setFormData((prev) => ({ ...prev, captchaToken: token }));
    }
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
              value={formData.name}
              placeholder="Full Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              value={formData.message}
              placeholder="Hey Steve, I'm reaching out because…"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
        </div>
        <ReCAPTCHA
          size="normal"
          sitekey={process.env.RECAPTCHA_PUBLIC_KEY}
          onChange={onCaptchaChange}
          ref={recaptcha}
        />
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
