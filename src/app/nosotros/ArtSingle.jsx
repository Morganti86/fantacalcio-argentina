"use client";
import React, { useState, useEffect } from "react";
import style from "./Nosotros.module.css";

export default function ArtSingle({ images }) {
  const [currentImageIndices, setCurrentImageIndices] = useState(
    Array(images.length).fill(0)
  );

  useEffect(() => {
    const intervals = images.map((image, index) => {
      return setInterval(() => {
        setCurrentImageIndices((prevIndices) => {
          const nextIndices = [...prevIndices];
          nextIndices[index] = nextIndices[index] === 0 ? 1 : 0;
          return nextIndices;
        });
      }, image.transitionTime);
    });

    // Cleanup intervals on component unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [images]);

  return (
    <section className={style.flexColumn}>
      {images.map((image, index) => (
        <img
          key={index}
          src={currentImageIndices[index] === 0 ? image.image : image.image2}
          alt={`Image ${index + 1}`}
          className={style[image.size]}
        />
      ))}
    </section>
  );
}
