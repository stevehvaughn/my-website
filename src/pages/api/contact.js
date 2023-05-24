import nodemailer from 'nodemailer';

const sendEmail = async (data) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Define the email message
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

  // Send the email using the transporter
  await transporter.sendMail(mailOptions);
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Perform any necessary validation or data processing here

    try {
      await sendEmail({ name, email, message });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);

      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}