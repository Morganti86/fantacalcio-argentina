import React from "react";
import style from "./Subasta.module.css";

export const SubastaFantaEquiposChecker = ({ equiposChecker, fixRemanente }) => {
    return (
        <div>
            <table className={style.table}>
                <thead>
                    <tr className={style.ttitle}>
                        <th>Equipo</th>
                        <th className={style.hideMobile}>Presupuesto</th>
                        <th className={style.hideMobile}>Gasto</th>
                        <th className={style.hideMobile}>Remanente</th>
                        <th>Diferencia</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {equiposChecker.map((e) => (
                    <tr key={e.id} className={`${style.tr} ${!e.consistente ? style.pointer : ""}`} 
                    onClick={!e.consistente ? () => fixRemanente(e) : undefined}>
                        <td>{e.fanta_equipo}</td>
                        <td className={style.hideMobile}>{e.presupuesto}</td>
                        <td className={style.hideMobile}>{e.gasto}</td>
                        <td className={style.hideMobile}>{e.remanente}</td>
                        <td>{e.diferencia}</td>
                        <td>{e.consistente ? "✅" : "❌"}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};