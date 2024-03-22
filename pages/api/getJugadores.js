import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { equipo, posicion } = req.query;
  const noTeam = "";

  if (req.method === "GET") {
    try {
      const client = await db.connect();
      const result = await client.query(
        "SELECT * FROM jugadores WHERE equipo = $1 AND posicion = $2 AND fanta_equipo = $3",
        [equipo, posicion, noTeam]
      );
      await client.release();
      const players = result.rows;
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
