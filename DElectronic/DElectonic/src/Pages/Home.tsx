import style from "./Home.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Header } from "../Components/Header/Header";
import { NavBar } from "../Components/NavBar/NavBar";
import { AboutUs } from "../Components/AboutUs/AboutUs";
import { Services } from "../Components/Services/Services";

export const Home = () => {
  return (
    <Parallax pages={2.7}>
      <div className={style.container}>
        <ParallaxLayer>
          <Header />
          <NavBar />
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Services />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.6}>
          <Services />
        </ParallaxLayer>
      </div>
    </Parallax>
  );
};
