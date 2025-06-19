import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const activo = 0;

  if (req.method === "GET") {
    try {
      const client = await db.connect();
      const result = await client.query(
        `
        SELECT 
          e.*, 
          COALESCE(j.gasto, 0) AS gasto
        FROM fanta_equipos e
        LEFT JOIN (
          SELECT fanta_equipo, SUM(precio_compra) AS gasto
          FROM jugadores
          GROUP BY fanta_equipo
        ) j ON e.fanta_equipo = j.fanta_equipo
        WHERE e.estado = $1
        ORDER BY e.fanta_equipo
        `,
        [activo]
      );
      await client.release();

      const equipos = result.rows.map((equipo) => {
        const presupuesto = equipo.presupuesto;
        const gasto = equipo.gasto;
        const remanente = equipo.remanente;
        const diferencia = presupuesto - gasto - remanente
        return {
          ...equipo,
          gasto,
          diferencia,
          consistente: presupuesto - gasto === remanente,
        };
      });

      res.status(200).json(equipos);
    } catch (error) {
      console.error("Error al consultar equipos:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
