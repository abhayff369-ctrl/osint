export default async function handler(req, res) {

  // API KEY
  const API_KEY = "No paid only free team";

  // GET PARAMS
  const { name, key } = req.query;

  // KEY CHECK
  if (!key) {
    return res.status(401).json({
      status: false,
      message: "API key required"
    });
  }

  if (key !== API_KEY) {
    return res.status(403).json({
      status: false,
      message: "Invalid API key"
    });
  }

  // NAME CHECK
  if (!name) {
    return res.status(400).json({
      status: false,
      message: "App name required"
    });
  }

  try {

    const api = `https://apkapi.alphaapi.workers.dev/api/apk?name=${encodeURIComponent(name)}`;

    const response = await fetch(api);
    const data = await response.json();

    return res.status(200).json({
      status: true,
      developer_by: "@Darkdeveloper02",
      result: data
    });

  } catch (err) {

    return res.status(500).json({
      status: false,
      error: err.message
    });

  }
}
