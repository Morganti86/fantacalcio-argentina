import Link from "next/link";
import { HEROLIST } from "./HeroList";
import style from "./Hero.module.css";
import { Bangers } from "next/font/google";

const mainFont = Bangers({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className={`${style.hero} ${mainFont.className}`}>
      <div className={style.container}>
        {HEROLIST.map((list) => (
          <span key={list.name}>
            {list.download ? (
              <a className={style.link} href={list.route} download>
                {list.name}
              </a>
            ) : list.external ? (
              <a
                className={style.link}
                href={list.route}
                target="_blank"
                rel="noopener noreferrer">
                {list.name}
              </a>
            ) : (
              <Link className={style.link} href={list.route}>
                {list.name}
              </Link>
            )}
          </span>
        ))}
      </div>
      <div className={style.logoContainer}>
        <img
          className={style.afa}
          src="/Images/afa-logo.webp"
          width="268"
          height="377"
          alt="afa-logo image">
        </img>
        <div className={style.logo}>FANTACALCIO</div>
        <div className={style.logo}>ARGENTINA</div>
      </div>
    </section>
  );
}
