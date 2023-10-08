import style from "./Home.module.css";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AboutUs } from "../../Components/AboutUs/AboutUs";
import { Services } from "../../Components/Services/Services";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <div className={style.container}>
        <NavBar />
        <AboutUs />
        <Services />
        <Footer/>
      </div>
    </>
  );
};
