"use client";
import confetti from "canvas-confetti";

// Configuración por equipo (puede expandirse fácilmente)
const confettiConfigPorEquipo = {
    "BOCA": { particleCount: 350, colors: ["#0033A0", "#FFD100"] },
    "RIVER": { particleCount: 350, colors: ["#ffffff", "#e10000"] },
    "INDEPENDIENTE": { particleCount: 250, colors: ["#D50000", "#D50000"] },
    "RACING": { particleCount: 250, colors: ["#00ADEF", "#ffffff"] },
    "SAN LORENZO": { particleCount: 150, colors: ["#d50032", "#002b5c"] },
    "VÉLEZ": { particleCount: 150, colors: ["#0033a0", "#ffffff"] },
};

export function ConfettiSpread(equipo) {

    if (!equipo || typeof equipo !== "string") {
        return;
    }

    const config = confettiConfigPorEquipo[equipo.toUpperCase()] || {
        particleCount: 80,
        colors: ["#ffffff"],
    };

    confetti({
        particleCount: config.particleCount,
        spread: 65,
        origin: { y: 0.6 },
        colors: config.colors,
    });
}