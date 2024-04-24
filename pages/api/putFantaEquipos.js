import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { fantaEquipo, remanenteActualizado } = req.body;
  if (req.method === "PUT") {
    try {
      const client = await db.connect();
      const result = await client.query(
        "UPDATE fanta_equipos SET remanente = $2 WHERE fanta_equipo = $1",
        [fantaEquipo, remanenteActualizado]
      );
      await client.release();
      res.status(200).json({ message: "Fanta_equipo updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Manejar cualquier otro método que no sea GET o PUT
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
