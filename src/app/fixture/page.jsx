"use client";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import style from "./fixture.module.css";
import jsPDF from "jspdf";

export default function Fixture() {
  const [fantaEquipos, setFantaEquipos] = useState([]);
  const [fixture, setFixture] = useState([]);

  useEffect(() => {
    const fetchEquipos = async () => {
      try {
        const fantaEquiposResponse = await fetch("/api/getFantaEquipos");
        if (!fantaEquiposResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const fantaEquiposData = await fantaEquiposResponse.json();

        // Ordenar por el campo 'orden'
        const sortedEquiposData = fantaEquiposData.sort((a, b) => {
          return a.orden - b.orden;
        });

        // Extraer solo los nombres de equipo ordenados
        const equiposList = sortedEquiposData.map(
          (fanta) => fanta.fanta_equipo
        );

        // Actualizar el estado con los nombres de equipo ordenados
        setFantaEquipos(sortedEquiposData);

        // Generar el fixture usando los nombres de equipo ordenados
        generarFixture(equiposList);
      } catch (error) {
        console.log("Failed to fetch fanta_equipos data.");
      }
    };
    fetchEquipos();
  }, []);

  const generarFixture = (equipos) => {
    const n = equipos.length;
    const jornadas = [];

    for (let i = 0; i < n - 1; i++) {
      const jornada = [];
      for (let j = 0; j < n / 2; j++) {
        const equipoLocal = i % 2 === 0 ? equipos[j] : equipos[n - 1 - j];
        const equipoVisitante = i % 2 === 0 ? equipos[n - 1 - j] : equipos[j];
        jornada.push({ equipoLocal, equipoVisitante });
      }

      // Organizar partidos para jornadas pares e impares. Quiero cierta aleatoriedad pero que se mantenga constante
      const jornadaPar = jornada.filter((_, index) => index % 2 === 0);
      const jornadaImpar = jornada.filter((_, index) => index % 2 !== 0);
      const jornadaSorted = [...jornadaImpar, ...jornadaPar];
      jornadas.push(jornadaSorted);
      // Rotate the array for the next round, except the first element
      equipos.splice(1, 0, equipos.pop());
    }

    setFixture(jornadas);
  };

  const newFixture = async () => {
    try {
      // Generar nuevo orden aleatorio para cada equipo
      const newOrdenedTeams = [...fantaEquipos]
        .sort(() => Math.random() - 0.5)
        .map((equipo, index) => ({
          ...equipo,
          orden: index + 1, // Aquí calculamos el nuevo orden aleatorio
        }));

      // Enviar la solicitud de actualización al backend
      const updateResponse = await fetch("/api/putEquiposOrden", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newOrdenedTeams }),
      });

      if (!updateResponse.ok) {
        throw new Error("Failed to update equipos orden");
      }

      // Actualizar el estado local con los equipos ordenados aleatoriamente
      setFantaEquipos(newOrdenedTeams);

      // Generar el fixture con los nombres de equipo ordenados aleatoriamente
      const equiposList = newOrdenedTeams.map((equipo) => equipo.fanta_equipo);
      generarFixture(equiposList);
    } catch (error) {
      console.error("Error updating equipos orden:", error);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const backgroundImg = "/Images/afa-logo.webp"; // Ruta del archivo WebP
    doc.addImage(backgroundImg, "WEBP", 178, 0, 22, 31);

    let y = 15; // Posición inicial en Y

    // Establecer fuente y tamaño personalizados
    doc.setFont("helvetica");
    doc.setFontSize(15);
    doc.text("FANTACALCIO ARGENTINA", 10, y);
    y += 6;
    doc.text("FIXTURE", 10, y);
    y += 13;

    fixture.forEach((jornada, jornadaIndex) => {
      const jornadaHeight = 6 + jornada.length * 6 + 2; // Calcular el espacio necesario para una jornada

      if (y + jornadaHeight > 280) {
        doc.addPage();
        doc.addImage(backgroundImg, "WEBP", 178, 0, 22, 31);
        y = 20;
      }

      doc.setFontSize(13);
      // Resaltar la palabra "FECHA" con fondo amarillo
      doc.setFillColor(255, 255, 0); // Amarillo
      const fechaText = `FECHA ${jornadaIndex + 1}`;
      const textWidth = doc.getTextWidth(fechaText);
      doc.rect(10, y - 4, textWidth, 5, "F"); // Dibuja un rectángulo relleno
      doc.text(fechaText, 10, y);
      y += 7;

      jornada.forEach((partido) => {
        doc.setFontSize(10);
        doc.text(`${partido.equipoLocal} vs ${partido.equipoVisitante}`, 10, y);
        y += 6;
      });

      y += 8; // Añadir espacio después de cada jornada
    });

    doc.save("fixture.pdf");
  };

  return (
    <section className={style.container}>
      <BackButton />
      <h1 className="title">FIXTURE</h1>
      <div className={style.grid}>
        {fixture.map((jornada, jornadaIndex) => (
          <div className={style.jornada} key={jornadaIndex}>
            <h2 className={style.fecha}>FECHA {jornadaIndex + 1}</h2>
            {jornada.map((partido, partidoIndex) => (
              <div className={style.match} key={partidoIndex}>
                <span className={`${style.fantaName} ${style.local}`}>
                  {partido.equipoLocal}
                </span>
                <img
                  className={style.crest}
                  src={`/FantaTeams/${partido.equipoLocal.toLowerCase()}.svg`}
                  width={20}
                  height={20}
                  alt={`${partido.equipoLocal} + img`}
                />
                vs
                <img
                  className={style.crest}
                  src={`/FantaTeams/${partido.equipoVisitante.toLowerCase()}.svg`}
                  width={20}
                  height={20}
                  alt={`${partido.equipoVisitante} + img`}
                />
                <span className={`${style.fantaName} ${style.visitante}`}>
                  {partido.equipoVisitante}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={downloadPDF}>
          DESCARGAR
        </button>
        <button className={style.button} onClick={newFixture}>
          GENERAR
        </button>
      </div>
    </section>
  );
}
