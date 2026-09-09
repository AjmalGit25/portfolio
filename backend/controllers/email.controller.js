import { z } from "zod";
import { sendFormDataEmail } from "../services/email.service.js";

export const sendEmail = async (req, res) => {
  // 1. Get data from frontend
  const { fullName, email, message } = req.body;

  // 2. Check if any null data
  if (!fullName || !email || !message) {
    return res.status(400).json({ message: "All fields are mandatory!" });
  }

  // 3. Validation
  const userSchema = z.object({
    fullName: z.string().trim().min(3, "First name must be at least 3 characters long").max(20),
    email: z.email("Please enter a valid email address"),
    message: z.string().trim().min(10, "Message must be at least 10 characters long")
  });

  const parsedData = userSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({ message: parsedData.error.issues.map((err) => ({ field: err.path[0], message: err.message })) });
  }

  // 4. Create the email object 
  const emailData = {
    fullName,
    email,
    message
  }

  // 5. Send Email via Resend
  try {
    const response = await sendFormDataEmail(emailData);
    return res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    console.log("Somethinng went wrong!", error);
    return res.status(500).json({ message: "Email sending failed", error });
  }
}