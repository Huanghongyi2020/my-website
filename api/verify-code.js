import crypto from "crypto";

// Same hash function as send-code.js
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

  const { email, code, codeHash, expires } = req.body;

  if (!email || !code || !codeHash || !expires) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Check expiration
  if (Date.now() > expires) {
    return res.status(400).json({ error: "Code expired. Please request a new one." });
  }

  // Re-hash the user's input and compare with the stored hash
  const expectedHash = hashCode(email, code);

  if (expectedHash !== codeHash) {
    return res.status(400).json({ error: "Invalid code. Please try again." });
  }

  // Code is valid
  return res.status(200).json({ success: true, verified: true });
}
