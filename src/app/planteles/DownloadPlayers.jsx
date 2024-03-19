"use client";
// import { db } from "@vercel/postgres";
const { db } = require("@vercel/postgres");


export default function DownloadPlayers() {
  async function pepe() {
    console.log("click button");
    try {
      const client = await db.connect({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      });
      console.log("Conexión exitosa");

      const data = await client.query("SELECT * FROM fanta_teams");
      console.log(data.rows);

      await client.release(); // Liberar el cliente después de usarlo
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error);
    }
  }

  return (
    <div>
      <button onClick={pepe}>Descargar Jugadores</button>
    </div>
  );
}

// import { Client } from "@vercel/postgres";
// import * as XLSX from "xlsx";

// export default function DownloadPlayers() {
//   const downloadPlayersAsXLSX = async () => {
//     try {
//       const client = new Client({
//         connectionString: process.env.POSTGRES_URL,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       });
//       await client.connect();
//       const { rows: players } = await client.query("SELECT * FROM players");
//       await client.end();

//       const ws = XLSX.utils.json_to_sheet(players);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, "Fanta Players");
//       XLSX.writeFile(wb, "fanta_players.xlsx");
//     } catch (error) {
//       console.error("Error al descargar jugadores en formato XLSX:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={downloadPlayersAsXLSX}>Descargar Jugadores</button>
//     </div>
//   );
// }