import { useState } from "react";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex: any) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className={style.container}>
      <div className={style.leftContent}>
        <img
          className={style.logo}
          src="/DeElektronik-logo-white.png"
          alt="Logo"
        />
        <p
          className={`${style.button} ${
            activeButton === 1 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Услуги
        </p>
        <p
          className={`${style.button} ${
            activeButton === 2 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Контакти
        </p>
      </div>
      <div className={style.socMedia}>
        <a
          href="https://www.facebook.com/profile.php?id=100092961762915"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/facebook.png"
            alt="Facebook"
            className={style.icon}
          />
        </a>
        <a>
          <img
            src="/instagram.png"
            alt="Instagram"
            className={style.icon}
          />
        </a>
      </div>
    </div>
  );
};
