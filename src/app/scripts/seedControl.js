const { db } = require("@vercel/postgres");

async function seedControl(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Select data from the "fanta_equipos" table
    const result = await client.sql`
      SELECT fanta_equipo, presupuesto, remanente FROM fanta_equipos
      order by fanta_equipo;
    `;

    const fantaEquipos = result.rows;

    // Iterate over each team to get the sum of precio_compra from jugadores table
    for (const equipo of fantaEquipos) {
      const sumResult = await client.sql`
        SELECT SUM(precio_compra) as totalcompras 
        FROM jugadores 
        WHERE fanta_equipo = ${equipo.fanta_equipo};
      `;

      const totalCompras = sumResult.rows[0].totalcompras || 0;

      // Calculate the budget check
      const budgetCheck = equipo.presupuesto - totalCompras - equipo.remanente;
      const status = budgetCheck === 0 ? "OK" : "ERROR";

      if (status === "ERROR") {
        throw new Error(
          `${equipo.fanta_equipo}. Presupuesto: ${equipo.presupuesto}, Remanente: ${equipo.remanente}, TotalCompras: ${totalCompras}, budgetCheck: ${budgetCheck}`
        );
      }

      console.log(
        `${status} ${equipo.fanta_equipo}, Presupuesto: ${equipo.presupuesto}, Remanente: ${equipo.remanente}, TotalCompras: ${totalCompras}, budgetCheck: ${budgetCheck}`
      );
    }

    return {
      teams: fantaEquipos,
    };
  } catch (error) {
    console.error("Error selecting teams and calculating sum:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedControl(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to select the database:",
    err
  );
});
