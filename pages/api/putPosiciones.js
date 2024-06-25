import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { posicionAnt, posicionAct } = req.body;
  const False = false;
  const True = true;

  if (req.method === "PUT") {
    try {
      const client = await db.connect();

      // Start a transaction
      await client.query("BEGIN");

      if (posicionAnt === null && posicionAct === null) {
        // Set 'ARQ' to pendiente=true, activo=true
        await client.query(
          "UPDATE posiciones SET pendiente = $1, activo = $1 WHERE posicion = 'ARQ'",
          [True]
        );

        // Set all other positions to pendiente=true, activo=false
        await client.query(
          "UPDATE posiciones SET pendiente = $1, activo = $2 WHERE posicion != 'ARQ'",
          [True, False]
        );
      } else {
        // Update to set activo to True for the new position
        await client.query(
          "UPDATE posiciones SET activo = $2 WHERE posicion = $1",
          [posicionAct, True]
        );

        // Update to set pendiente and activo to False for the old position
        await client.query(
          "UPDATE posiciones SET pendiente = $2, activo = $2 WHERE posicion = $1",
          [posicionAnt, False]
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
