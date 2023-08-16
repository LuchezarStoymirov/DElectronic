import { useState, useRef } from 'react';
import style from './Products.module.css';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const navigate = useNavigate();
  const husqRef = useRef<HTMLDivElement>(null);
  const gardRef = useRef<HTMLDivElement>(null);
  const oregRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState(null);

  const returnHome = () => {
    navigate('/');
  };

  const handleButtonClick = (buttonIndex : any) => {
    setActiveButton(buttonIndex);

    if (buttonIndex === 1 && husqRef.current) {
      husqRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (buttonIndex === 2 && gardRef.current) {
      gardRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (buttonIndex === 3 && oregRef.current) {
      oregRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.backButton} onClick={returnHome}>{'\u276E'} Назад</h1>
      </div>
      <div className={style.nav}>
        <h4 className={`${style.navButton} ${activeButton === 1 ? style.active : ""}`} onClick={() => handleButtonClick(1)}>Husqvarna</h4>
        <h4 className={`${style.navButton} ${activeButton === 2 ? style.active : ""}`} onClick={() => handleButtonClick(2)}>Gardena</h4>
        <h4 className={`${style.navButton} ${activeButton === 3 ? style.active : ""}`} onClick={() => handleButtonClick(3)}>Oregon</h4>
      </div>
      <div className={style.productsHusq} ref={husqRef}>
        <img src="src/Images/husqlogo.png" alt="logo"  className={style.logo}/>
       </div>
      <div className={style.productsGard} ref={gardRef}>
      <img src="src/Images/gardenalogo.png" alt="logo"  className={style.logo}/>
      </div>
      <div className={style.productsOreg} ref={oregRef}>
      <img src="src/Images/oregonlogo.png" alt="logo"  className={style.logo}/>
      </div>
    </div>
  );
};
