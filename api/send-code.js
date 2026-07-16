import nodemailer from "nodemailer";
import crypto from "crypto";

// Hash the code with email as salt for secure client-side storage
function hashCode(email, code) {
  return crypto.createHmac("sha256", process.env.GMAIL_APP_PASSWORD || "secret")
    .update(email + ":" + code)
    .digest("hex");
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // Create a hash of the code (to be stored client-side for verification)
  const codeHash = hashCode(email, code);
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes

  // Create transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"SIEGLOBE Education" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Your SIEGLOBE Verification Code | 您的SIEGLOBE验证码",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1a237e; font-size: 28px; margin: 0;">SIEGLOBE</h1>
          <p style="color: #666; font-size: 14px;">International Education</p>
        </div>
        
        <div style="background: #f8f9fa; border-radius: 12px; padding: 30px; text-align: center;">
          <h2 style="color: #333; margin-bottom: 10px;">Verification Code 验证码</h2>
          <p style="color: #666; margin-bottom: 20px;">
            Use this code to verify your email and access the AI Education Consultant.<br/>
            请使用以下验证码验证您的邮箱并访问AI教育顾问。
          </p>
          <div style="background: #1a237e; color: white; font-size: 32px; font-weight: bold; letter-spacing: 8px; padding: 15px 30px; border-radius: 8px; display: inline-block;">
            ${code}
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            This code expires in 10 minutes. 验证码10分钟内有效。
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
          <p>© 2026 SIEGLOBE International Education. All rights reserved.</p>
          <p>If you didn't request this code, please ignore this email.</p>
          <p>如果您没有请求此验证码，请忽略此邮件。</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    // Return the hash and expiration to the client
    // The client will send these back with the code for verification
    return res.status(200).json({ 
      success: true, 
      message: "Code sent",
      codeHash,
      expires
    });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
