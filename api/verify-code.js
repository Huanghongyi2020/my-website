// Shared in-memory store (same instance as send-code in same Vercel function context)
// Note: For production with multiple instances, use Vercel KV or a database

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: "Email and code are required" });
  }

  // Get codes from global store
  const codes = globalThis.__verificationCodes;

  if (!codes || !codes.has(email)) {
    return res.status(400).json({ error: "No code found for this email. Please request a new one." });
  }

  const stored = codes.get(email);

  // Check expiration
  if (Date.now() > stored.expires) {
    codes.delete(email);
    return res.status(400).json({ error: "Code expired. Please request a new one." });
  }

  // Check code
  if (stored.code !== code) {
    return res.status(400).json({ error: "Invalid code" });
  }

  // Code is valid - clean up
  codes.delete(email);

  return res.status(200).json({ success: true, verified: true });
}
