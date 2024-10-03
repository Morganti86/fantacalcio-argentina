import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { equipoAct, equipoAnt } = req.body;
  const False = false;
  const True = true;
  
  if (req.method === "PUT") {
    try {
      const client = await db.connect();

      // Start a transaction
      await client.query("BEGIN");
      if (equipoAct === null) {
        // reiniciar valores
          await client.query("UPDATE equipos SET pendiente = $1, activo = $2", [
          True,
          False,
        ]);
      } else if (equipoAnt === null && equipoAct !== null) {
        // actualizo primer equipo sorteado como activo
        await client.query(
          "UPDATE equipos SET pendiente = $2, activo = $2 WHERE equipo = $1",
          [equipoAct, True]
        );
      } else {
        // Update to set activo to False for the previous team sorted
        await client.query(
          "UPDATE equipos SET pendiente = $2, activo = $2 WHERE equipo = $1",
          [equipoAnt, False]
        );
        // Update to set activo to True for the new team sorted
        await client.query(
          "UPDATE equipos SET pendiente = $2, activo = $2 WHERE equipo = $1",
          [equipoAct, True]
        );
      }

      // Commit the transaction
      await client.query("COMMIT");

      await client.release();
      res.status(200).json({ message: "Equipo updated successfully" });
    } catch (error) {
      // Rollback the transaction in case of error
      await client.query("ROLLBACK");
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle any other method that is not PUT
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
