import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstName, email } = await req.json(); // Capture form data
  console.log(firstName, email, 'check');

  if (!firstName || !email) {
    return NextResponse.json(
      { message: 'Name and email are required' },
      { status: 400 }
    );
  }

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or another email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password (or app password)
    },
  });

  // Email content
  const mailOptions = {
    from: '"Your Company" <your-email@example.com>',
    to: email, // Send email to the customer
    subject: 'Thank You for Opting In!',
    text: `Hello ${firstName},\n\nThank you for opting in to receive updates from us.\n\nBest regards,\nYour Company`,
    html: `<p>Hello <strong>${firstName}</strong>,</p><p>Thank you for opting in to receive updates from us.</p><p>Best regards,<br>Your Company</p>`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Opt-in confirmed, email sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send confirmation email' },
      { status: 500 }
    );
  }
}
