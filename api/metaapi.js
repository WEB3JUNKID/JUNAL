export default async function handler(req, res) {
  const { token, endpoint } = req.query;
  try {
    const response = await fetch(`https://provisioning-api-v1.agium.biz${endpoint}`, {
      headers: { "auth-token": token }
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
