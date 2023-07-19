import { useState } from "react";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex : any) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className={style.container}>
      <h4
        className={`${style.button} ${activeButton === 0 ? style.active : ""}`}
        onClick={() => handleButtonClick(0)}
      >
        Начало
      </h4>
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
