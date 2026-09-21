import { Resend } from "resend";            // Email API
import dns from "node:dns";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.EMAIL_TO || "reach.ajmal.dev@gmail.com";

dns.setDefaultResultOrder("ipv4first");     // prefer IPv4 addresses over IPv6 ✅


// SMTP Configuration
// const SMTP_USER = process.env.EMAIL_USER;
// const SMTP_PASS = process.env.EMAIL_PASSWORD;

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


// ====================== Send New Visitor Email ==========================

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


// ====================== Send Form Data (Contact Form Submission) ==========================

export const sendFormDataEmail = async (formData = {}) => {
  const { fullName, email, message } = formData;

  const subject = "📩 New Form Submission from Portfolio";

  const text = `
New Form Submission 📩

Full Name: ${fullName}
Email: ${email}

Message:
${message}
  `;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Portfolio Message</title>
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #eef6ff;
        font-family: Arial, Helvetica, sans-serif;
        color: #172554;
      ">

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="background-color: #eef6ff; padding: 40px 15px;"
        >
          <tr>
            <td align="center">

              <!-- Main Card -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  max-width: 620px;
                  background-color: #ffffff;
                  border-radius: 18px;
                  overflow: hidden;
                  border: 1px solid #bfdbfe;
                  box-shadow: 0 10px 30px rgba(30, 64, 175, 0.12);
                "
              >

                <!-- Header -->
                <tr>
                  <td style="
                    background: linear-gradient(135deg, #1e3a8a, #2563eb);
                    padding: 30px;
                    text-align: center;
                  ">

                    <div style="
                      display: inline-block;
                      width: 58px;
                      height: 58px;
                      line-height: 58px;
                      border-radius: 50%;
                      background-color: rgba(255,255,255,0.15);
                      border: 1px solid rgba(255,255,255,0.35);
                      font-size: 28px;
                    ">
                      📩
                    </div>

                    <h1 style="
                      margin: 18px 0 6px;
                      color: #ffffff;
                      font-size: 24px;
                      font-weight: 700;
                    ">
                      New Portfolio Message
                    </h1>

                    <p style="
                      margin: 0;
                      color: #dbeafe;
                      font-size: 14px;
                    ">
                      Someone just reached out through your portfolio.
                    </p>

                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">

                    <!-- Sender Information -->
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background-color: #f8fbff;
                        border: 1px solid #dbeafe;
                        border-radius: 12px;
                      "
                    >
                      <tr>
                        <td style="padding: 18px 20px;">

                          <p style="
                            margin: 0 0 6px;
                            color: #64748b;
                            font-size: 12px;
                            text-transform: uppercase;
                            letter-spacing: 0.6px;
                            font-weight: 700;
                          ">
                            Full Name
                          </p>

                          <p style="
                            margin: 0;
                            color: #172554;
                            font-size: 16px;
                            font-weight: 600;
                          ">
                            ${fullName}
                          </p>

                        </td>
                      </tr>

                      <tr>
                        <td style="
                          padding: 0 20px 18px;
                          border-top: 1px solid #e2e8f0;
                        ">

                          <p style="
                            margin: 18px 0 6px;
                            color: #64748b;
                            font-size: 12px;
                            text-transform: uppercase;
                            letter-spacing: 0.6px;
                            font-weight: 700;
                          ">
                            Email Address
                          </p>

                          <a
                            href="mailto:${email}"
                            style="
                              color: #2563eb;
                              font-size: 15px;
                              text-decoration: none;
                              font-weight: 500;
                            "
                          >
                            ${email}
                          </a>

                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <div style="
                      margin-top: 22px;
                      padding: 20px;
                      background-color: #eff6ff;
                      border-left: 4px solid #2563eb;
                      border-radius: 10px;
                    ">

                      <p style="
                        margin: 0 0 10px;
                        color: #1e40af;
                        font-size: 13px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                      ">
                        Message
                      </p>

                      <p style="
                        margin: 0;
                        color: #334155;
                        font-size: 15px;
                        line-height: 1.7;
                        white-space: pre-line;
                      ">
                        ${message}
                      </p>

                    </div>

                    <!-- Reply Button -->
                    <div style="
                      text-align: center;
                      margin-top: 28px;
                    ">

                      <a
                        href="mailto:${email}"
                        style="
                          display: inline-block;
                          padding: 13px 24px;
                          background-color: #2563eb;
                          color: #ffffff;
                          text-decoration: none;
                          border-radius: 9px;
                          font-size: 14px;
                          font-weight: 700;
                        "
                      >
                        Reply to ${fullName}
                      </a>

                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="
                    padding: 20px 30px;
                    background-color: #f8fafc;
                    border-top: 1px solid #e2e8f0;
                    text-align: center;
                  ">

                    <p style="
                      margin: 0;
                      color: #64748b;
                      font-size: 12px;
                      line-height: 1.6;
                    ">
                      This message was submitted through
                      <strong style="color: #2563eb;">
                        Ajmal Hussain's Portfolio
                      </strong>
                    </p>

                    <p style="
                      margin: 6px 0 0;
                      color: #94a3b8;
                      font-size: 11px;
                    ">
                      © ${new Date().getFullYear()} Md Ajmal Hussain
                    </p>

                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `;

  // Resend logic 
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: EMAIL_TO,
      subject,
      text,
      html,
    });

    console.log("New Form email sent:", data);
    return data;
  } catch (err) {
    console.error("Failed to send form email:", err);
    return { success: false, error: err };
  }
};