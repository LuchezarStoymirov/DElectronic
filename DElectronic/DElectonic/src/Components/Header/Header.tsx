import style from "./Header.module.css";
const logoSrc = `${import.meta.env.BASE_URL}DeElektronik-logo-white.png`;
const facebookSrc = `${import.meta.env.BASE_URL}facebook.png`;
const instagramSrc = `${import.meta.env.BASE_URL}instagram.png`;

export const Header = () => {
  return (
    <div className={style.header}>
      <img className={style.logo} src={logoSrc} alt="Logo" />
      <div className={style.socMedia}>
        <a
          href="https://www.facebook.com/profile.php?id=100092961762915"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookSrc} alt="Facebook" className={style.icon} />
        </a>
        <img src={instagramSrc} alt="Instagram" className={style.icon} />
      </div>
    </div>
  );
};
