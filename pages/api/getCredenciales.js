require("dotenv").config();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const auth = {
        user: process.env.REACT_APP_SUBASTA_USER,
        pass: process.env.REACT_APP_SUBASTA_PASS,
      };
      res.status(200).json(auth);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
