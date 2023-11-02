import style from "./AboutUs.module.css";

export const AboutUs = () => {
    return (
        <div className={style.container}>
            <div className={style.backgroundImage}></div>
            <div className={style.info}>
                <h1 className={style.title}>ДеЕлектроник</h1>
                <p className={style.content}>
                    Официален партньор и дистрибутор на Машини Husqvarna.
                </p>
            </div>
        </div>
    );
};
