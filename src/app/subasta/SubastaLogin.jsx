"use client";
import style from "./Subasta.module.css";

export const SubastaLogin = ({
  onSubmit,
  onChangeUsuario,
  onChangeContraseña,
  usuario,
  contraseña,
}) => {
  return (
    <form className={style.login} onSubmit={onSubmit}>
      <label className={style.labelForm}>
        <input
          className={style.input}
          type="text"
          placeholder="USUARIO"
          required
          value={usuario}
          onChange={onChangeUsuario}
        />
      </label>
      <label className={style.labelForm}>
        <input
          className={style.input}
          type="password"
          placeholder="CONTRASEÑA"
          required
          value={contraseña}
          onChange={onChangeContraseña}
        />
      </label>
      <button className={style.button} type="submit">
        CONFIRMAR
      </button>
    </form>
  );
};