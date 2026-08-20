import { Resend } from "resend";
import dotenv from "dotenv";
import dns from "node:dns";
dotenv.config();

// SMTP Configuration
// const SMTP_USER = process.env.EMAIL_USER;
// const SMTP_PASS = process.env.EMAIL_PASSWORD;

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.EMAIL_TO || "reach.ajmal.dev@gmail.com";

dns.setDefaultResultOrder("ipv4first");     // prefer IPv4 addresses over IPv6 ✅

// const transporter = resend.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   family: 4,
//   connectionTimeout: 30000,
//   greetingTimeout: 30000,
//   socketTimeout: 60000,
//   auth: {
//     user: SMTP_USER,
//     pass: SMTP_PASS,
//   },
//   logger: true,
//   debug: true,
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.error("SMTP connection failed:", error && error.message ? error.message : error);
//   } else {
//     console.log("SMTP server is ready!");
//   }
// });

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

  const subject = "🎉 New Portfolio Visitor";
  const text = `New Portfolio Visitor!

Time: ${formattedDate}
Location: ${city}, ${region}, ${country}
Device: ${device || "Unknown"}
OS: ${os || "Unknown"}
Browser: ${browser || "Unknown"}`;

  const html = `
    <p><strong>New Portfolio Visitor!</strong></p>
    <p><strong>Time:</strong> ${formattedDate}</p>
    <p><strong>Location:</strong> ${city}, ${region}, ${country}</p>
    <p><strong>Device:</strong> ${device || "Unknown"}</p>
    <p><strong>OS:</strong> ${os || "Unknown"}</p>
    <p><strong>Browser:</strong> ${browser || "Unknown"}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: EMAIL_TO,
      subject,
      text,
      html,
    });

    console.log("New visitor email sent:", data);
    return { success: true, info: data };
  } catch (err) {
    console.error("Failed to send visitor email:", err);
    return { success: false, error: err };
  }
};