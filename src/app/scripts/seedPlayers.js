//https://tableconvert.com/excel-to-json
//https://products.aspose.app/cells/conversion/excel-to-json

const { db } = require("@vercel/postgres");
const { PLAYERS } = require("../../app/lib/placeholder-data.jsx");
const bcrypt = require("bcrypt");

async function seedPlayers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "positions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        team VARCHAR(255) REFERENCES league_teams(team),
        player VARCHAR(255) NOT NULL,
        basePrice INT NOT NULL,
        position VARCHAR(255) REFERENCES positions(position),
        poli BOOLEAN NOT NULL,
        fantaTeam VARCHAR(255),
        boughtPrice INT,
        image VARCHAR(255)
        );
    `;

    console.log(`Created "players" table`);

    // Insert or update data into the "position" table
    const players = await Promise.all(
      PLAYERS.map(async (player) => {
        const poliValue = player.poli ? true : false;
        const fantaTeam = player.fantaTeam.toUpperCase();
        const boughtPrice = player.boughtPrice ? player.boughtPrice : null;
        const image = player.image ? player.image : null;

        const insertedPlayer = await client.sql`
        INSERT INTO players (team, player, basePrice, position, poli, fantaTeam, boughtPrice, image)
        VALUES (
        ${player.team}, 
        ${player.player}, 
        ${player.basePrice}, 
        ${player.position}, 
        ${poliValue}, 
        ${fantaTeam}, 
        ${boughtPrice}, 
        ${image}
        )
        RETURNING *;
        `;
        console.log(`Seeded players "${player.player}"`);
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
  await seedPlayers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
