import style from "./SliderButton.module.css";

export default function SliderButton({ direction, onClick }) {
  return (
    <button className={style.boton} onClick={onClick}>
      {direction === "prev" ? <img src="/Icons/prevTrack.svg" width={50} height={50} alt="home" className={style.homeIcon}  /> : <img src="/Icons/nextTrack.svg" width={50} height={50} alt="home" className={style.homeIcon}  />}
    </button>
  );
}