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
        <a href="https://www.facebook.com/profile.php?id=100092961762915" target="_blank" rel="noopener noreferrer">
          <img src="src/Images/facebook.png" alt="Facebook" className={style.icon} />
        </a>
        <img src="src/Images/instagram.png" alt="Instagram" className={style.icon} />
      </div>
    </div>
  );
};
