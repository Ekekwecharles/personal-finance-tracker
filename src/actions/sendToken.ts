"use server";

import nodemailer from "nodemailer";

interface SendTokenParams {
  toEmail: string;
  token: number;
  bank: string;
  accountNum: number;
  accountName: string;
  amount: number;
}

export async function sendTokenByEmail({
  toEmail,
  token,
  bank,
  accountNum,
  accountName,
  amount,
}: SendTokenParams) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const message = `
Hello,

A new activity was just recorded in your Personal Finance Tracker.

Here are the details of the record:

• Institution: ${bank}
• Reference Number: ${accountNum}
• Label: ${accountName}
• Amount Recorded: ${formattedAmount}

To confirm this activity, please enter the access code below in the app:

Access Code: ${token}

If you did not initiate this action, you can safely ignore this message.
No financial action will be performed through this application.

This tool is for personal record-keeping and activity tracking only.

Regards,  
Personal Finance Team

`;

  try {
    await transporter.sendMail({
      from: `"Personal Finance" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Your Access Code",
      text: message,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false };
  }
}
