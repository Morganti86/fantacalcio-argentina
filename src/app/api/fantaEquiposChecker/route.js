import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const activo = 0;

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

    client.release();

    const equipos = result.rows.map((equipo) => {
      const presupuesto = equipo.presupuesto;
      const gasto = equipo.gasto;
      const remanente = equipo.remanente;

      return {
        ...equipo,
        gasto,
        diferencia: presupuesto - gasto - remanente,
        consistente: presupuesto - gasto === remanente,
      };
    });

    return NextResponse.json(equipos, { status: 200 });
  } catch (error) {
    console.error("Error al consultar equipos:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
