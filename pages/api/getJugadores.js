import { db } from "@vercel/postgres";

function shuffleJugadores(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default async function handler(req, res) {
  // const { equipo, posicion } = req.query;
  const noTeam = "";
  const shouldShuffle = process.env.SORTEO_ALEATORIO === "true";  // Leer la variable de entorno

  if (req.method === "GET") {
    try {
      const client = await db.connect();
      const result = await client.query(
        "SELECT * FROM jugadores WHERE fanta_equipo = $1",
        [noTeam]
        // "SELECT * FROM jugadores WHERE equipo = $1 AND posicion = $2 AND fanta_equipo = $3",
        // [equipo, posicion, noTeam]
      );
      await client.release();
      let players = result.rows;

      if (shouldShuffle) {
        players = shuffleJugadores(players);
      }

      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
