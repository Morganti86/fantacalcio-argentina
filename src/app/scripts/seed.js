const { db } = require("@vercel/postgres");
const {
  FANTAEQUIPOS,
  EQUIPOS,
  POSICIONES,
} = require("../../app/lib/placeholder-data.jsx");
const bcrypt = require("bcrypt");

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
        campeon_actual BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "fanta_equipos" table`);
    // Insert data into the "fanta_teams" table
    const fantaEquipos = await Promise.all(
      FANTAEQUIPOS.map(async (equipo) => {
        // Insert the team
        const insertedTeam = await client.sql`
            INSERT INTO fanta_equipos (fanta_equipo, presidente, email, presupuesto, remanente, campeonatos, copas, campeon_actual)
            VALUES (${equipo.fantaEquipo}, ${equipo.presidente}, ${equipo.email}, ${equipo.presupuesto}, ${equipo.remanente}, ${equipo.campeonatos}, ${equipo.copas}, ${equipo.campeon_actual})
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
        equipo VARCHAR(255) PRIMARY KEY,
        estado BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "Equipos" table`);

    // Insert or update data into the "league_teams" table
    const equipos = await Promise.all(
      EQUIPOS.map(async (team) => {
        const insertedTeam = await client.sql`
              INSERT INTO equipos (equipo, estado)
              VALUES (${team.equipo}, ${team.estado})
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
        posicion VARCHAR(255) PRIMARY KEY,
        estado BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "posiciones" table`);

    // Insert or update data into the "position" table
    const posicion = await Promise.all(
      POSICIONES.map(async (pos) => {
        const insertedPosition = await client.sql`
              INSERT INTO posiciones (posicion, estado)
              VALUES (${pos.posicion}, ${pos.estado})
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
