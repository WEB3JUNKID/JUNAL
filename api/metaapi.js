export default async function handler(req, res) {
  // Set CORS headers so your frontend on Vercel can talk to this serverless route
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { token, endpoint } = req.query;

  if (!token) {
    return res.status(400).json({ error: "MetaApi token is required." });
  }

  if (!endpoint) {
    return res.status(400).json({ error: "Endpoint parameter is required." });
  }

  try {
    // Construct the destination URL
    const targetUrl = `https://provisioning-api-v1.agium.biz${endpoint}`;

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "auth-token": token,
        "Accept": "application/json"
      }
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message || "Failed to reach MetaApi server." });
  }
}
