import { useState, RefObject } from "react";
import style from "./NavBar.module.css";
import { IParallax } from "@react-spring/parallax";

type NavBarProps = {
  parallaxRef: RefObject<IParallax>;
};

export const NavBar = ({ parallaxRef }: NavBarProps) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex: any) => {
    setActiveButton(buttonIndex);

    if (buttonIndex === 1) {
      parallaxRef.current?.scrollTo(1.2);
    } else if (buttonIndex === 2) {
      parallaxRef.current?.scrollTo(2);
    }
  };

  return (
    <div className={style.container}>
      <h4
        className={`${style.button} ${activeButton === 1 ? style.active : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        Услуги
      </h4>
      <h4
        className={`${style.button} ${activeButton === 2 ? style.active : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        Контакти
      </h4>
    </div>
  );
};
