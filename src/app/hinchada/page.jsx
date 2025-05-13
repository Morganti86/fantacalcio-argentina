"use client";
import { useState, useEffect } from "react";
import { HINCHADA } from "./HinchadaList";
import BackButton from "../components/BackButton";
import style from "./Hinchada.module.css";

export default function Hinchada() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Limpieza del estado al desmontar el componente
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
      }
    };
  }, []);

  useEffect(() => {
    if (currentAudio) {
      // Actualizar la barra de progreso cuando se reproduce el audio
      currentAudio.ontimeupdate = () => {
        setCurrentTime(currentAudio.currentTime);
        setProgress((currentAudio.currentTime / currentAudio.duration) * 100);
      };
      // Detener la reproducción cuando la canción termina
      currentAudio.onended = () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      };
      // Actualizar la duración máxima de la canción
      currentAudio.onloadedmetadata = () => {
        setDuration(currentAudio.duration);
      };
    }
  }, [currentAudio]);

  function reproducirAudio(audio) {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audioElement = new Audio(audio.scr);
    audioElement.play();
    setCurrentAudio(audioElement);
    setSelectedAudio(audio);
    setIsPlaying(true);
  }

  function alternarReproduccion() {
    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleSeek(e) {
    const seekTime =
      (e.nativeEvent.offsetX / e.target.clientWidth) * currentAudio.duration;
    currentAudio.currentTime = seekTime;
    setProgress((seekTime / currentAudio.duration) * 100);
  }

  // Función para formatear el tiempo en segundos a formato mm:ss
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <section className={style.container}>
      <BackButton />
      <h1 className="title">HINCHADA</h1>
      <div className={style.listaCanciones}>
        <div className={style.scrollableList}>
          <table className={style.table}>
            <thead>
              <tr className={style.ttitle}>
                <th>#</th>
                <th className={style.td}>Título</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              {HINCHADA.map((audio, index) => (
                <tr
                  key={index}
                  className={style.tr}
                  onClick={() => reproducirAudio(audio)}>
                  <td>{index + 1}</td>
                  <td className={style.td}>
                    <div className={style.mediaContainer}>
                      <img src={audio.cover} width={60} height={60} />
                    </div>
                    <div className={style.infoContainer}>
                      <h4 className={style.titulo}>{audio.titulo}</h4>
                      <h5 className={style.artista}>{audio.artista}</h5>
                    </div>
                  </td>
                  <td>{audio.duracion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={style.reproduccion}>
        {selectedAudio && (
          <div className={style.player}>
            <button className={style.button} onClick={alternarReproduccion}>
              <img
                src={isPlaying ? "/Icons/pause.svg" : "/Icons/play.svg"}
                width={40}
                height={40}
                alt={isPlaying ? "Pause" : "Play"}
              />
            </button>
            <div className={style.progressBar} onClick={handleSeek}>
              <div
                className={style.progress}
                style={{ width: `${progress}%`, position: "relative" }}>
                {isPlaying && (
                  <div
                    className={style.progressImage}
                    style={{
                      position: "absolute",
                      top: -110,
                      left: "calc(100% - 55px)", // Ajustar el tamaño de la imagen según sea necesario
                    }}>
                    <img
                      src="/Images/maradona-animado.webp"
                      alt="maradona-animado image"
                      width="110"
                      height="110"
                    />
                  </div>
                )}
              </div>
              <div className={style.timeLabels}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            <div className={style.onTrack}>
              {isPlaying ? "Reproduciendo: " : "Seleccionada: "}
              {selectedAudio.titulo} - {selectedAudio.artista}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}