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

// const transporter = nodemailer.createTransport({
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

export const sendNewVisitorEmail = async (formattedDate, location = {}, device, deviceType, os, browser, network, postal, timezone, source) => {

  // Defensive logging to inspect incoming location shape
  try {
    console.log("sendNewVisitorEmail - incoming location:", JSON.stringify(location));
  } catch (e) {
    console.log("sendNewVisitorEmail - incoming location (non-serializable):", location);
  }

  // Support multiple possible shapes: { city, region, country } or { location: { city,... } }
  const city = location?.city || location?.location?.city || location?.city_name || location?.cityName || "Unknown city";
  const region = location?.region || location?.location?.region || location?.regionName || "Unknown region";
  const country = location?.country || location?.location?.country || location?.country_name || location?.countryCode || "Unknown country";

  const subject = "🎉 New Portfolio Visitor";
  const text = `New Portfolio Visitor! 👤

🕒 Time: ${formattedDate}
📍 Location: ${city}, ${region}, ${country}
📱 Device: ${device || "Unknown"}
💻 OS: ${os || "Unknown"}
🌐 Browser: ${browser || "Unknown"}
📡 Network: ${network || "Unknown"}
📮 Postal Code: ${postal || "Unknown"}
🕐 Timezone: ${timezone || "Unknown"}
🛸 Source: ${source || "Unknown"}`;

  //   const html = `
  //   <p><strong>New Portfolio Visitor! 👤</strong></p>
  //   <p>🕒 <strong>Time:</strong> ${formattedDate}</p>
  //   <p>📍 <strong>Location:</strong> ${city}, ${region}, ${country}</p>
  //   <p>📱 <strong>Device:</strong> ${device || "Unknown"}</p>
  //   <p>💻 <strong>OS:</strong> ${os || "Unknown"}</p>
  //   <p>🌐 <strong>Browser:</strong> ${browser || "Unknown"}</p>
  //   <p>📡 <strong>Network:</strong> ${network || "Unknown"}</p>
  //   <p>📮 <strong>Postal Code:</strong> ${postal || "Unknown"}</p>
  //   <p>🕐 <strong>Timezone:</strong> ${timezone || "Unknown"}</p>
  // `;

  const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #f5f7fa;">

    <div style="background: #111827; color: white; padding: 20px; border-radius: 12px 12px 0 0;">
      <h2 style="margin: 0;">👤 New Portfolio Visitor!</h2>
    </div>

    <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px;">

      <p style="margin: 12px 0;">
        🕒 <strong>Time:</strong> ${formattedDate}
      </p>

      <p style="margin: 12px 0;">
        📍 <strong>Location:</strong> ${city}, ${region}, ${country}
      </p>

      <p style="margin: 12px 0;">
        📱 <strong>Device:</strong> ${device || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        ⚙️ <strong>Device Type:</strong> ${deviceType || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        💻 <strong>OS:</strong> ${os || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        🌐 <strong>Browser:</strong> ${browser || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        📡 <strong>Network:</strong> ${network || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        📮 <strong>Postal Code:</strong> ${postal || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        🕐 <strong>Timezone:</strong> ${timezone || "Unknown"}
      </p>

      <p style="margin: 12px 0;">
        🛸 <strong>Source:</strong> ${source || "Unknown"}
      </p>

    </div>
  </div>
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