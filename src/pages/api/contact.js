import nodemailer from 'nodemailer';
import { config } from '../../utils/config.js';
import { validateContactForm, sanitizeContactForm } from '../../utils/validation.js';
import { contactRateLimit } from '../../utils/rateLimit.js';
import { safeFetch, handleError, logError } from '../../utils/errorHandler.js';

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.contact.gmail.user,
      pass: config.contact.gmail.pass,
    },
  });

  const mailOptions = {
    from: data.email,
    to: config.contact.recipientEmail,
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent from your portfolio website</small></p>
    `,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `,
  };

  await transporter.sendMail(mailOptions);
};

async function verifyCaptcha(token) {
  const response = await safeFetch(config.apis.recaptchaVerify, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: config.contact.recaptcha.secretKey,
      response: token,
    }),
  });

  const data = await response.json();
  return data.success;
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // 1. Validate and sanitize input
    const sanitizedData = sanitizeContactForm(req.body);
    const validation = validateContactForm(sanitizedData);
    
    if (!validation.valid) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: validation.errors 
      });
    }

    const { name, email, message, captchaToken } = sanitizedData;

    // 2. Verify reCAPTCHA token
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
    }

    // 3. Send email
    await sendEmail({ name, email, message });
    
    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully!' 
    });
    
  } catch (error) {
    logError(error, { 
      endpoint: '/api/contact',
      method: req.method,
      userAgent: req.headers['user-agent']
    });
    
    const errorInfo = handleError(error);
    return res.status(500).json({
      success: false,
      message: errorInfo.message
    });
  }
}

// Apply rate limiting
export default contactRateLimit(handler);
