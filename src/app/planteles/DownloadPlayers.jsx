'use client';
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export function DownloadPlayers({ fantaPlayers }) {
  const handleDownload = () => {
    // Crear un libro de trabajo y una hoja de cálculo
    const workbook = { Sheets: {}, SheetNames: ["Jugadores"] };
    const sheetData = fantaPlayers.map((player) => ({
      Equipo: player.team,
      Jugador: player.player,
      Precio: player.baseprice,
      Pos: player.position,
      Poli: player.poli,
      FantaEquipo: player.fantateam,
      PrecioCompra: player.boughtprice,
    }));
    const sheet = XLSX.utils.json_to_sheet(sheetData);

    // Agregar la hoja de cálculo al libro de trabajo
    workbook.Sheets["Jugadores"] = sheet;

    // Convertir el libro de trabajo a un archivo binario
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Crear un Blob desde el archivo binario
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Descargar el archivo
    const fileName = "jugadores.xlsx";
    saveAs(blob, fileName);
  };

  return (
    <div>
      <button onClick={handleDownload}>Descargar Jugadores</button>
    </div>
  );
}