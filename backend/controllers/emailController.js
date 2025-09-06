// controllers/emailController.js
const { sendMail } = require('../utils/emailService');

const sendEmail = async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
      });
    }

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send email
    const emailOptions = {
      to: process.env.CONTACT_EMAIL || 'admin@example.com',
      subject: `New message from ${name}: ${subject || 'Contact Form'}`,
      html: emailContent
    };

    await sendMail(emailOptions);

    // Send confirmation email to user
    const userEmailContent = `
      <h2>Thank you for contacting us!</h2>
      <p>Dear ${name},</p>
      <p>We've received your message and will get back to you within 24 hours.</p>
      <p><strong>Your message:</strong></p>
      <p>${message}</p>
      <br>
      <p>Best regards,<br>Your Company Team</p>
    `;

    const userEmailOptions = {
      to: email,
      subject: 'Thank you for your message',
      html: userEmailContent
    };

    await sendMail(userEmailOptions);

    res.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email'
    });
  }
};

module.exports = {
  sendEmail
};