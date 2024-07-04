"use client";
import style from "./ListadoFantaEquipos.module.css"
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export function DownloadPlayers({ fantaJugadores, fantaEquipo }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  
  const fullDate = `${year}-${month}-${day}`;
  const handleDownload = () => {
    // Crear un libro de trabajo y una hoja de cálculo
    const workbook = { Sheets: {}, SheetNames: ["Jugadores"] };
    const sheetData = fantaJugadores.map((jugador) => ({
      equipo: jugador.equipo,
      jugador: jugador.jugador,
      precioBase: jugador.precio_base,
      posicion: jugador.posicion,
      poli: jugador.poli ? "SI" : "",
      fantaEquipo: jugador.fanta_equipo,
      precioCompra: jugador.precio_compra,
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
    
    const fileName = fantaEquipo
      ? `${fantaEquipo}-${fullDate}.xlsx`
      : `Planteles-${fullDate}.xlsx`;
    saveAs(blob, fileName);
  };

  return (
    <div className={style.fantaContainer}>
      <button onClick={handleDownload} className={style.button}>
        DESCARGAR XLSX
      </button>
    </div>
  );
}
