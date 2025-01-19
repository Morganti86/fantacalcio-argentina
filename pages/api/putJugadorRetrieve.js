import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { id } = req.body;
  
  if (req.method === "PUT") {
    try {
      const client = await db.connect();
      
      // Paso 1: Obtener los valores actuales de fanta_equipo y precio_compra
      const result = await client.query(
        "SELECT fanta_equipo, precio_compra FROM jugadores WHERE id = $1",
        [id]
      );
      
      if (result.rows.length === 0 || !result.rows[0].fanta_equipo) {
        // Si no se encuentra el jugador o fanta_equipo está vacío, no hacer nada
        await client.release();
        res.status(204).json({ message: "No updates needed, fanta_equipo is empty" });
        return;
      }

      const jugador = result.rows[0];
      const fantaEquipoAnterior = jugador.fanta_equipo;
      const precioCompraAnterior = jugador.precio_compra;
      
      // Paso 2: Actualizar el jugador, dejando fanta_equipo vacío y precio_compra null
      await client.query(
        "UPDATE jugadores SET fanta_equipo = '', precio_compra = NULL WHERE id = $1",
        [id]
      );
      
      // Paso 3: Actualizar la tabla fanta_equipos, sumando el remanente
      if (fantaEquipoAnterior) {
        await client.query(
          "UPDATE fanta_equipos SET remanente = remanente + $1 WHERE fanta_equipo = $2",
          [precioCompraAnterior, fantaEquipoAnterior]
        );
      }
      
      await client.release();
      res.status(200).json({
        message: "Player updated successfully",
        monto: precioCompraAnterior,
        equipo: fantaEquipoAnterior
      });
    } catch (error) {
      console.error("Error updating player or fanta_equipos:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}