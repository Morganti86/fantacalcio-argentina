import style from "./BackButton.module.css"

export default function BackButton() {
    return (
        <a href="/" className={style.home}>
            <img src="/Icons/back.svg" width={50} height={50} alt="home" className={style.homeIcon} />
        </a>
    );
}