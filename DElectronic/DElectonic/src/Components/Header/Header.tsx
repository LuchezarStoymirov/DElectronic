import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <img
        className={style.logo}
        src="src/Images/DElectronic-logo.png"
        alt="Logo"
      />
    </div>
  );
};
