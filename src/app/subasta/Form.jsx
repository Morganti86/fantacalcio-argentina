"use client";
import { useState } from "react";
import style from "./Form.module.css";
import { useRouter } from "next/navigation";

export function Form() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para verificar la contraseña
    if (password === "PITUFOS") {
      // Redirigir al usuario a otro componente
      router.push("/otro-componente");
    } else {
      alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section className={style.formulario}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>
          <input
            className={style.input}
            type="text"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={style.button} type="submit">
          CONFIRMAR
        </button>
      </form>
    </section>
  );
}
