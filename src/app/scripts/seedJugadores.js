//https://tableconvert.com/excel-to-json
//https://products.aspose.app/cells/conversion/excel-to-json

const { db } = require("@vercel/postgres");
const { JUGADORES } = require("../lib/data-jugadores.jsx");
const { EQUIPOS } = require("../lib/data-equipos.jsx");
const { IMAGENJUGADORES } = require("../lib/data-imagenjugadores.jsx");

// const bcrypt = require("bcrypt");

async function seedJugadores(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "positions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS jugadores (
        id SERIAL PRIMARY KEY,
        equipo VARCHAR(255) REFERENCES equipos(equipo),
        jugador VARCHAR(255) NOT NULL,
        precio_base INT NOT NULL,
        posicion VARCHAR(255) REFERENCES posiciones(posicion),
        poli BOOLEAN NOT NULL,
        fanta_equipo VARCHAR(255),
        precio_compra INT,
        imagen VARCHAR(255)
        );
    `;

    console.log(`Created "jugadores" table`);

    // Insert or update data into the "position" table
    const players = await Promise.all(
      JUGADORES.map(async (player) => {
        //chequeamos consistencia con equipos
        const equipo = EQUIPOS.find(
          (nomEquipo) => nomEquipo.equipo === player.equipo
        );
        const posicion =
          player.posicion === "VOL" || player.posicion === "MED"
            ? "MED"
            : player.posicion;
        const poli = player.poli ? true : false;
        const fantaEquipo = player.fantaEquipo.toUpperCase();
        const precioCompra = player.precioCompra ? player.precioCompra : null;
        //cargamos imagenes de jugadores
        const imagen = IMAGENJUGADORES.find(
          (imgJugador) => imgJugador.jugador === player.jugador);
        player.imagen = imagen ? imagen.imagen : null;
        const insertedPlayer = await client.sql`
        INSERT INTO jugadores (equipo, jugador, precio_base, posicion, poli, fanta_equipo, precio_compra, imagen)
        VALUES (
        ${equipo.equipo}, 
        ${player.jugador}, 
        ${player.precioBase}, 
        ${posicion}, 
        ${poli}, 
        ${fantaEquipo}, 
        ${precioCompra}, 
        ${player.imagen}
        )
        RETURNING *;
        `;
        console.log(`Seeded players "${player.jugador}"`);
        return insertedPlayer[0];
      })
    );

    return {
      createTable,
      teams: players,
    };
  } catch (error) {
    console.error("Error seeding players:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedJugadores(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
