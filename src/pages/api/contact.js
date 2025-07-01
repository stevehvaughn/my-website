// /pages/api/contact.js or /app/api/contact/route.js (adjust path accordingly)
import nodemailer from 'nodemailer';
import axios from 'axios';

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.email,
    to: 'steve.h.vaughn@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ message: 'Captcha token is missing.' });
  }

  try {
    // ✅ 1. Verify reCAPTCHA token
    const captchaRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        },
      }
    );

    if (!captchaRes.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
    }

    // ✅ 2. If CAPTCHA passed, send the email
    await sendEmail({ name, email, message });
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email or verifying reCAPTCHA:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}
