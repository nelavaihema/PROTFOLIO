const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ status: 'error', message: 'Method not allowed.' }) };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'error', message: 'Please provide name, email, and message.' })
      };
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'success', message: 'Message received. I’ll reply soon.' })
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      subject: subject || 'New portfolio contact request',
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Portfolio message'}\n\nMessage:\n${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success', message: 'Message received. I’ll reply soon.' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Unable to submit message right now.' })
    };
  }
};
