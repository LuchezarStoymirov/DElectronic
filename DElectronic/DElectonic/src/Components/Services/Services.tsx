import style from './Services.module.css';
import { ParallaxLayer } from '@react-spring/parallax';
import { useNavigate } from 'react-router-dom';

export const Services = () => {

    const navigate = useNavigate();

    const handleClick = (event: any) => {
        const target = event.currentTarget.getAttribute('data-target');
        navigate(target);
    }
    

    return(
        <div className={style.container}>
            <ParallaxLayer offset={0.6} speed={0.5} className={style.parallax}>
            <div className={style.info}>
                <div className={style.service}>
                    <div className={style.box} data-target="/products" onClick={handleClick}>

                        <div className={style.img} style={{backgroundImage: 'url(src/Images/SellInvetory.jpeg)'}}></div>
                        <div className={style.content}>
                            <h1 className={style.title}>Title 1</h1>
                            <h4 className={style.description}>Content1 oosn o mqwodm nqowndon oqdm qonwdn oqwdn oqwndon </h4>
                        </div>
                    </div>
                    <div className={style.sectionHeader}>
                        <h1 className={style.header}>Услуги</h1>
                    </div>
                </div>
                <div className={style.service}>
                    <div className={style.box}>
                    <div className={style.img} style={{backgroundImage: 'url(src/Images/Services.jpeg)'}}></div>
                        <div className={style.content}>
                            <h1 className={style.title}>Title 2</h1>
                            <h4 className={style.description}>Content1 oosn o mqwodm nqowndon oqdm qonwdn oqwdn oqwndon </h4>
                        </div>
                    </div>
                </div>
                <div className={style.service}>
                    <div className={style.box}>
                        <div className={style.img} style={{backgroundImage: 'url(src/Images/robots.jpeg)'}}></div>
                        <div className={style.content}>
                            <h1 className={style.title}>Title 3</h1>
                            <h4 className={style.description}>Content1 oosn o mqwodm nqowndon oqdm qonwdn oqwdn oqwndon </h4>
                        </div>
                    </div>
                </div>
            </div>
            </ParallaxLayer>
        </div>
    );
}
