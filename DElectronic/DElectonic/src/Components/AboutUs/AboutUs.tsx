import style from "./AboutUs.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const AboutUs = () => {
  return (
    <div className={style.container}>
        <ParallaxLayer offset={0.6} speed={0.7}>
      <div className={style.info}>
        <h1 className={style.title}>Кои сме ние?</h1>
        <p className={style.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit
          facilis error harum aliquid veniam in consequuntur aut architecto
          labore sapiente quam praesentium, excepturi quaerat explicabo suscipit
          minima. Saepe, quae.
        </p>
      </div>
      </ParallaxLayer>
    </div>
  );
};
