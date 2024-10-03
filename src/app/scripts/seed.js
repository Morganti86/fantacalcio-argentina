const { db } = require("@vercel/postgres");
const { FANTAEQUIPOS } = require("../../app/lib/data-fantaequipos.jsx");
const { EQUIPOS } = require("../../app/lib/data-equipos.jsx");
const { POSICIONES } = require("../../app/lib/data-posiciones.jsx");
// const bcrypt = require("bcrypt");

async function seedDropTables(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "league_teams" table if it doesn't exist
    const dropTable = await client.sql`
      DROP TABLE IF EXISTS jugadores, fanta_equipos, equipos, posiciones;
    `;

    console.log(
      `Deleted "jugadores, fanta_equipos, equipos, posiciones" tables`
    );

    // delete all tables
    return {
      dropTable,
    };
  } catch (error) {
    console.error("Error deleting tables:", error);
    throw error;
  }
}

async function seedFantaEquipos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "fanta_teams" table if it doesn't exist
    const createTable = await client.sql`
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
        orden INT NOT NULL
      );
    `;

    console.log(`Created "fanta_equipos" table`);
    // Insert data into the "fanta_teams" table
    const fantaEquipos = await Promise.all(
      FANTAEQUIPOS.map(async (equipo, index) => {
        // Insert the team
        if (equipo.fantaEquipo.toUpperCase() === "INDEPENDIENTE SPURS") {
          equipo.fantaEquipo = "INDEPTE. SPURS";
        }
        if (equipo.fantaEquipo.toUpperCase() === "MORGANTI") {
          equipo.fantaEquipo = "MORGANTI FC";
        }
        const insertedTeam = await client.sql`
        INSERT INTO fanta_equipos (fanta_equipo, presidente, email, presupuesto, remanente, campeonatos, copas, campeon_actual, orden)
        VALUES (${equipo.fantaEquipo.toUpperCase()}, ${equipo.presidente}, ${equipo.email}, 
        ${equipo.presupuesto}, ${equipo.remanente}, ${equipo.campeonatos}, ${
          equipo.copas
        }, 
        ${equipo.campeon_actual}, ${index + 1})
        RETURNING *;
          `;
        console.log(`Seeded team "${equipo.fantaEquipo}"`);
        return insertedTeam[0];
      })
    );

    return {
      createTable,
      teams: fantaEquipos,
    };
  } catch (error) {
    console.error("Error seeding teams:", error);
    throw error;
  }
}

async function seedEquipos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "league_teams" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS equipos (
        id SERIAL PRIMARY KEY,
        equipo VARCHAR(255) UNIQUE,
        pendiente BOOLEAN NOT NULL,
        activo BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "Equipos" table`);

    // Insert or update data into the "league_teams" table
    const equipos = await Promise.all(
      EQUIPOS.map(async (team) => {
        const insertedTeam = await client.sql`
              INSERT INTO equipos (equipo, pendiente, activo)
              VALUES (${team.equipo}, ${team.pendiente}, ${team.activo})
              RETURNING *;
            `;
        console.log(`Seeded team "${team.equipo}"`);
        return insertedTeam[0];
      })
    );

    return {
      createTable,
      teams: equipos,
    };
  } catch (error) {
    console.error("Error seeding teams:", error);
    throw error;
  }
}

async function seedPosiciones(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "positions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS posiciones (
        id SERIAL PRIMARY KEY,
        posicion VARCHAR(255) UNIQUE,
        pendiente BOOLEAN NOT NULL,
        activo BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "posiciones" table`);

    // Insert or update data into the "position" table
    const posicion = await Promise.all(
      POSICIONES.map(async (pos) => {
        const insertedPosition = await client.sql`
              INSERT INTO posiciones (posicion, pendiente, activo)
              VALUES (${pos.posicion}, ${pos.pendiente}, ${pos.activo})
              RETURNING *;
            `;
        console.log(`Seeded pos "${pos.posicion}"`);
        return insertedPosition[0];
      })
    );

    return {
      createTable,
      teams: posicion,
    };
  } catch (error) {
    console.error("Error seeding teams:", error);
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
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
