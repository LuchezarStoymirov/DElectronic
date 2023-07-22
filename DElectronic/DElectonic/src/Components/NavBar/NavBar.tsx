import { useState } from "react";
import style from "./NavBar.module.css";

export const NavBar = ({ parallaxRef }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex: any) => {
    setActiveButton(buttonIndex);

    if (buttonIndex === 1) {
      // Scroll to the second ParallaxLayer (offset={1.3})
      parallaxRef.current.scrollTo(1.2);
    } else if (buttonIndex === 2) {
      // Scroll to the third ParallaxLayer (offset={2})
      parallaxRef.current.scrollTo(2);
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
