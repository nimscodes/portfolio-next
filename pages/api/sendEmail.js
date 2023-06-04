import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Add your email provider configuration here (e.g., SMTP, Gmail, SendGrid)
      // For example, for Gmail:
      service: 'gmail',
      auth: {
        user: 'princenims1994@gmail.com',
        pass: 'bbtlnvbpmfostkrd'

      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: 'princenims1994@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
