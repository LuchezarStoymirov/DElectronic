import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <img
        className={style.logo}
        src="src/Images/DElectronic-logo.png"
        alt="Logo"
      />
      <div className={style.socMedia}>
        <img src="src/Images/facebook.png" alt="" className={style.icon} />
        <img src="src/Images/instagram.png" alt="" className={style.icon} />
      </div>
    </div>
  );
};
