"use client";
import { useState, useEffect } from "react";
import { POTRERO } from "./PotreroList";
import style from "./Potrero.module.css";
import BackButton from "../components/BackButton";
import SliderButton from "../components/SliderButton";

export default function Potrero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVideo = POTRERO[currentIndex];

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % POTRERO.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + POTRERO.length) % POTRERO.length);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextVideo();
    }, currentVideo.duracion * 1000); // usa la duración del video actual

    return () => clearTimeout(timeout); // limpia el timeout si el video cambia antes de tiempo
  }, [currentVideo]);

  return (
    <div className={style.container}>
      <BackButton />
      <h1 className="title">POTRERO</h1>

      <div className={style.sliderWrapper}>
        <div className={style.slider}>
          <SliderButton direction="prev" onClick={prevVideo} />
          <div className={style.videoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&mute=1&loop=0&playlist=${currentVideo.videoId}`}
              title={currentVideo.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <SliderButton direction="next" onClick={nextVideo} />
        </div>
      </div>
    </div>
  );
}


// "use client";
// import style from "./destacados.module.css";
// import { DESTACADOS } from "./DestacadosList";
// import { useRef } from "react";

// export default function Destacados() {
//   const carruselRef = useRef(null);

//   const scroll = (direction = "right") => {
//     if (!carruselRef.current) return;

//     const itemWidth = carruselRef.current.firstChild?.offsetWidth || 0;
//     const { scrollLeft, scrollWidth } = carruselRef.current;

//     if (direction === "right") {
//       const nextScroll = scrollLeft + itemWidth;
//       carruselRef.current.scrollTo({
//         left: nextScroll >= scrollWidth ? 0 : nextScroll,
//         behavior: "smooth",
//       });
//     }

//     if (direction === "left") {
//       const prevScroll = scrollLeft - itemWidth;
//       carruselRef.current.scrollTo({
//         left: prevScroll >= 0 ? prevScroll : 0,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className={style.container}>
//       <h1 className="title">POTRERO</h1>

//       <div className={style.wrapper}>
//         <button className={style.boton} onClick={() => scroll("left")}>
//           ◀
//         </button>

//         <div className={style.carrusel} ref={carruselRef}>
//           {DESTACADOS.map((video, idx) => {
//             const url = `https://www.youtube.com/embed/${video.videoId}?playlist=${video.videoId}&loop=1&autoplay=1&mute=1`;
//             return (
//               <div key={idx} className={style.item}>
//                 <iframe
//                   width="315"
//                   height="560"
//                   src={url}
//                   title={video.titulo}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         <button className={style.boton} onClick={() => scroll("right")}>
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// }
