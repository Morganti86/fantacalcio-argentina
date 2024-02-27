const { db } = require("@vercel/postgres");
const {
  FANTATEAMS,
  LEAGUETEAMS,
  POSITIONS,
} = require("../../app/lib/placeholder-data.jsx");
const bcrypt = require("bcrypt");

async function seedFantaTeams(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "fanta_teams" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS fanta_teams (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        president VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        budget INT NOT NULL,
        remaining INT NOT NULL
      );
    `;

    console.log(`Created "fanta_teams" table`);

    // Insert or update data into the "fanta_teams" table
    const fanta_teams = await Promise.all(
      FANTATEAMS.map(async (team) => {
        // Check if the team already exists
        const existingTeam = await client.sql`
          SELECT * FROM fanta_teams WHERE name = ${team.team};
        `;

        if (existingTeam.length > 0) {
          // Update budget and remaining if the team exists
          await client.sql`
            UPDATE fanta_teams
            SET budget = ${team.budget}, remaining = ${team.remaining}
            WHERE name = ${team.name};
          `;
          console.log(`Updated team "${team.name}"`);
          return existingTeam[0];
        } else {
          // Insert the team if it doesn't exist
          const insertedTeam = await client.sql`
            INSERT INTO fanta_teams (name, president, email, budget, remaining)
            VALUES (${team.name}, ${team.president}, ${team.email}, ${team.budget}, ${team.remaining})
            RETURNING *;
          `;
          console.log(`Seeded team "${team.name}"`);
          return insertedTeam[0];
        }
      })
    );

    return {
      createTable,
      teams: fanta_teams,
    };
  } catch (error) {
    console.error("Error seeding teams:", error);
    throw error;
  }
}

async function seedLeagueTeams(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "league_teams" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS league_teams (
        team VARCHAR(255) PRIMARY KEY,
        state BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "league_teams" table`);

    // Insert or update data into the "league_teams" table
    const league_teams = await Promise.all(
      LEAGUETEAMS.map(async (team) => {
        const insertedTeam = await client.sql`
              INSERT INTO league_teams (team, state)
              VALUES (${team.team}, ${team.state})
              RETURNING *;
            `;
        console.log(`Seeded team "${team.team}"`);
        return insertedTeam[0];
      })
    );

    return {
      createTable,
      teams: league_teams,
    };
  } catch (error) {
    console.error("Error seeding teams:", error);
    throw error;
  }
}

async function seedPositions(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "positions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS positions (
        position VARCHAR(255) PRIMARY KEY,
        state BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "positions" table`);

    // Insert or update data into the "position" table
    const positions = await Promise.all(
      POSITIONS.map(async (pos) => {
        const insertedPosition = await client.sql`
              INSERT INTO positions (position, state)
              VALUES (${pos.position}, ${pos.state})
              RETURNING *;
            `;
        console.log(`Seeded pos "${pos.position}"`);
        return insertedPosition[0];
      })
    );

    return {
      createTable,
      teams: positions,
    };
  } catch (error) {
    console.error("Error seeding teams:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedFantaTeams(client);
  // await seedLeagueTeams(client);
  await seedPositions(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
