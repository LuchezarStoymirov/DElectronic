import style from "./Footer.module.css";
import { QueryForm } from "../QueryFrom/QueryForm";

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footer}>
      <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.870638175187!2d23.30895098927491!3d42.642902317003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8477564c40bf%3A0x162c676a414f2574!2sVital%20Dens!5e0!3m2!1sbg!2sbg!4v1690061092185!5m2!1sbg!2sbg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={style.mapInsert}
          ></iframe>
        </div>
        <div className={style.contacts}>
          <h3 className={style.info}><span style={{color: 'gray', fontSize: '15px'}}>Телефон: </span>+359877608777</h3>
          <h3 className={style.info}><span style={{color: 'gray', fontSize: '15px'}}>Имейл:</span> de.elektronik@gmail.com</h3>
          <h3 className={style.info}>
            <span style={{color: 'gray', fontSize: '15px'}}>Адрес:</span> Софийски околовръстен път 36, 1415 Водолей-1, София
          </h3>
        </div>
        <div className={style.emailForm}>
            <h2 className={style.formHeader}>Изпратете Запитване</h2>
            <QueryForm />
        </div>
      </div>
    </div>
  );
};
