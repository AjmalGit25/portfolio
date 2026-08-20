import nodemailer from "nodemailer";
import dotenv from "dotenv";
import dns from "node:dns";
dotenv.config();

// SMTP Configuration
const SMTP_USER = process.env.EMAIL_USER;
const SMTP_PASS = process.env.EMAIL_PASSWORD;
const EMAIL_TO = process.env.EMAIL_TO || "reach.ajmal.dev@gmail.com";

dns.setDefaultResultOrder("ipv4first");     // prefer IPv4 addresses over IPv6 ✅

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  logger: true,
  debug: true,
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error && error.message ? error.message : error);
  } else {
    console.log("SMTP server is ready!");
  }
});

/**
 * Send notification for a new visitor.
 * Only sends when `isFirstVisit` is true.
 * Returns an object: { success: boolean, info?, error?, skipped? }
 */
export const sendNewVisitorEmail = async (
  formattedDate,
  location = {},
  device,
  os,
  browser,
) => {

  const city = location?.city || "Unknown city";
  const region = location?.region || "Unknown region";
  const country = location?.country || "Unknown country";

  const from = SMTP_USER || EMAIL_TO;

  const subject = "🎉 New Portfolio Visitor";
  const text = `New Portfolio Visitor!\n\nTime: ${formattedDate}\nLocation: ${city}, ${region}, ${country}\nDevice: ${device || "Unknown"}\nOS: ${os || "Unknown"}\nBrowser: ${browser || "Unknown"}`;

  const html = `<p><strong>New Portfolio Visitor!</strong></p>
<p><strong>Time:</strong> ${formattedDate}</p>
<p><strong>Location:</strong> ${city}, ${region}, ${country}</p>
<p><strong>Device:</strong> ${device || "Unknown"}</p>
<p><strong>OS:</strong> ${os || "Unknown"}</p>
<p><strong>Browser:</strong> ${browser || "Unknown"}</p>`;

  try {
    const info = await transporter.sendMail({
      from,
      to: EMAIL_TO,
      subject,
      text,
      html,
    });

    console.log("New visitor email sent:", info && info.messageId ? info.messageId : info);
    return { success: true, info };
  } catch (err) {
    const errorMsg = err && err.message ? err.message : String(err);
    console.error("Failed to send visitor email:", errorMsg);
    return { success: false, error: errorMsg };
  }
};

export default {
  sendNewVisitorEmail,
};