import style from "./Home.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Header } from "../../Components/Header/Header";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AboutUs } from "../../Components/AboutUs/AboutUs";
import { Services } from "../../Components/Services/Services";
import { Footer } from "../../Components/Footer/Footer";
import { useRef } from "react";

export const Home = () => {
  const parallaxRef = useRef(); 

  return (
    <>
    <Parallax ref={parallaxRef} pages={3}>
      <div className={style.container}>
        <ParallaxLayer>
          <Header />
          <NavBar parallaxRef={parallaxRef} />
          <AboutUs />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.4}>
          <Services />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <Footer/>
        </ParallaxLayer>
      </div>
    </Parallax>
    </>
  );
};
