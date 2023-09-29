import style from './Services.module.css';
import { IParallax, ParallaxLayer } from '@react-spring/parallax';

interface ServicesProps {
  parallaxRef: React.RefObject<IParallax>;
}

export const Services: React.FC<ServicesProps> = ({ parallaxRef }) => {

    function scrollToBottom() {
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(3);
        }
    }

    return (
        <div className={style.container}>
            <ParallaxLayer offset={0.6} speed={0.5} className={style.parallax}>
                <div className={style.info}>
                    <div className={style.service}>
                        <div className={style.box}>
                            <div className={style.img} style={{backgroundImage: 'url(src/Images/Services.jpeg)'}}></div>
                            <div className={style.content}>
                                <h1 className={style.title}>Магазин</h1>
                                <h4 className={style.description}>Широка гама от продукти за подръжка на зелени площи.</h4>
                                <h4 className={style.storeLink}>Вижте Още...</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.service} onClick={scrollToBottom}>
                        <div className={style.box}>
                            <div className={style.img} style={{backgroundImage: 'url(src/Images/repair.jpeg)'}}></div>
                            <div className={style.content}>
                                <h1 className={style.title}>Ремонт и Обслужване на Машини</h1>
                                <h4 className={style.description}>Извършваме ремонтни дейности, Обслужване и подръжка на машини.</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.service} onClick={scrollToBottom}>
                        <div className={style.box}>
                            <div className={style.img} style={{backgroundImage: 'url(src/Images/robot.jpeg)'}}></div>
                            <div className={style.content}>
                                <h1 className={style.title}>Инсталация на Косачки-Роботи</h1>
                                <h4 className={style.description}>Инсталация на Косачки-Роботи на адрес.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
        </div>
    );
}
