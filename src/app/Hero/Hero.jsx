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
          <Link className={style.link} key={list.name} href={list.route}>
            <span>{list.name}</span>
          </Link>
        ))}
      </div>
      <div className={style.logoContainer}>
        <img src="/Images/world-cup.webp" width="200" height="240"></img>
        <div className={style.logo}>FANTACALCIO</div>
        <div className={style.logo}>ARGENTINA</div>
      </div>
    </section>
  );
}
