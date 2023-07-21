import style from "./Home.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Header } from "../Components/Header/Header";
import { NavBar } from "../Components/NavBar/NavBar";
import { AboutUs } from "../Components/AboutUs/AboutUs";
import { Services } from "../Components/Services/Services";

export const Home = () => {
  return (
    <Parallax pages={3}>
      <div className={style.container}>
        <ParallaxLayer>
          <Header />
          <NavBar />
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.4}>
          <Services />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.7}>
        </ParallaxLayer>
      </div>
    </Parallax>
  );
};
