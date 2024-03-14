import Link from "next/link";
import { HEROLIST } from "./HeroList";
import style from "./Hero.module.css";
import { Bangers } from "next/font/google";
import { Lights } from "../components/Lights";

const mainFont = Bangers({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className={`${style.hero} ${mainFont.className}`}>
      {/* <Lights /> */}
      <div className={style.container}>
        {HEROLIST.map((list) => (
          <span key={list.name}>
            <Link className={style.link} href={list.route}>
              {list.name}
            </Link>
          </span>
        ))}
      </div>
      <div className={style.logoContainer}>
        <img
          className={style.cup}
          src="/Images/world-cup.webp"
          width="200"
          height="240"></img>
        <div className={style.logo}>FANTACALCIO</div>
        <div className={style.logo}>ARGENTINA</div>
      </div>
    </section>
  );
}
