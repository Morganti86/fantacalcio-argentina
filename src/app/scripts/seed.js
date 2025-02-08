const { db } = require("@vercel/postgres");
const { FANTAEQUIPOS } = require("../../app/lib/data-fantaequipos.jsx");
const { EQUIPOS } = require("../../app/lib/data-equipos.jsx");
const { POSICIONES } = require("../../app/lib/data-posiciones.jsx");

async function seedDropTables(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      DROP TABLE IF EXISTS jugadores, fanta_equipos, equipos, posiciones;
    `;
    console.log(`Deleted tables: jugadores, fanta_equipos, equipos, posiciones`);
  } catch (error) {
    console.error("Error deleting tables:", error);
    throw error;
  }
}

async function seedFantaEquipos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS fanta_equipos (
        id SERIAL PRIMARY KEY,
        fanta_equipo VARCHAR(255) NOT NULL UNIQUE,
        presidente VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        presupuesto INT NOT NULL,
        remanente INT NOT NULL,
        campeonatos INT NOT NULL, 
        copas INT NOT NULL, 
        campeon_actual BOOLEAN NOT NULL,
        estado INT NOT NULL,
        orden INT
      );
    `;
    console.log(`Created "fanta_equipos" table`);

    let ordenActual = 1; // Contador solo para equipos activos
    await Promise.all(
      FANTAEQUIPOS.map(async (equipo) => {
        if (equipo.fantaEquipo.toUpperCase() === "INDEPENDIENTE SPURS") {
          equipo.fantaEquipo = "INDEPTE. SPURS";
        }
        if (equipo.fantaEquipo.toUpperCase() === "MORGANTI") {
          equipo.fantaEquipo = "MORGANTI FC";
        }
        const orden = equipo.estado === 1 ? ordenActual++ : null;
        await client.sql`
          INSERT INTO fanta_equipos (fanta_equipo, presidente, email, presupuesto, remanente, campeonatos, copas, campeon_actual, estado, orden)
          VALUES (${equipo.fantaEquipo.toUpperCase()}, ${equipo.presidente}, ${equipo.email}, 
          ${equipo.presupuesto}, ${equipo.remanente}, ${equipo.campeonatos}, ${equipo.copas}, 
          ${equipo.campeon_actual}, ${equipo.estado}, ${orden});
        `;
        console.log(`Seeded team "${equipo.fantaEquipo}"`);
      })
    );
  } catch (error) {
    console.error("Error seeding fanta_equipos:", error);
    throw error;
  }
}

async function seedEquipos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS equipos (
        id SERIAL PRIMARY KEY,
        equipo VARCHAR(255) UNIQUE,
        pendiente BOOLEAN NOT NULL,
        activo BOOLEAN NOT NULL
      );
    `;
    console.log(`Created "equipos" table`);

    await Promise.all(
      EQUIPOS.map(async (team) => {
        await client.sql`
          INSERT INTO equipos (equipo, pendiente, activo)
          VALUES (${team.equipo}, ${team.pendiente}, ${team.activo});
        `;
        console.log(`Seeded team "${team.equipo}"`);
      })
    );
  } catch (error) {
    console.error("Error seeding equipos:", error);
    throw error;
  }
}

async function seedPosiciones(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS posiciones (
        id SERIAL PRIMARY KEY,
        posicion VARCHAR(255) UNIQUE,
        pendiente BOOLEAN NOT NULL,
        activo BOOLEAN NOT NULL
      );
    `;
    console.log(`Created "posiciones" table`);

    await Promise.all(
      POSICIONES.map(async (pos) => {
        await client.sql`
          INSERT INTO posiciones (posicion, pendiente, activo)
          VALUES (${pos.posicion}, ${pos.pendiente}, ${pos.activo});
        `;
        console.log(`Seeded posicion "${pos.posicion}"`);
      })
    );
  } catch (error) {
    console.error("Error seeding posiciones:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedDropTables(client);
  await seedFantaEquipos(client);
  await seedEquipos(client);
  await seedPosiciones(client);
  await client.end();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});
