import style from "./Home.module.css";
import { Header } from "../Components/Header/Header";
import { NavBar } from "../Components/NavBar/NavBar";
import { AboutUs } from "../Components/AboutUs/AboutUs";

export const Home = () => {
    return(
        <div className={style.container}>
            <Header/>
            <NavBar/>
            <AboutUs/>
        </div>
    );
}