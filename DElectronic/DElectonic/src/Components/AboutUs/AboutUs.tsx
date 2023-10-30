import { useState, useEffect } from "react";
import style from "./AboutUs.module.css";

export const AboutUs = () => {
  const images = [
    "src/Images/Exterior.jpeg",
    "src/Images/Carousel1.jpeg",
    "src/Images/Carousel2.jpeg",
    "src/Images/Carousel3.jpeg",
    "src/Images/Carousel4.jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const firstLoadTimeout = setTimeout(() => {
      setAnimate(true);
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
    }, 6000);

    return () => clearTimeout(firstLoadTimeout);
  }, []);

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => {
          setCurrentImageIndex(nextImageIndex);
          setNextImageIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
          setAnimate(true);
        }, 100);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [animate, nextImageIndex]);

  return (
    <div className={style.container}>
      <div 
        className={`${style.backgroundImage} ${style.currentImage}`} 
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div 
        className={`${style.backgroundImage} ${animate ? style.nextImage : ''}`} 
        style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
      />
      <div className={style.info}>
        <h1 className={style.title}>ДеЕлектроник</h1>
        <p className={style.content}>
          Официален партньор и дистрибутор на Машини Husqvarna.
        </p>
      </div>
    </div>
  );
};
