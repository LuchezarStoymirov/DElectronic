import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import style from "./AboutUs.module.css";

export const AboutUs = () => {
    const carouselImages = [
        "src/Images/Exterior.jpeg",
        "src/Images/Carousel1.jpeg",
        "src/Images/Carousel2.jpeg",
        "src/Images/Carousel3.jpeg",
        "src/Images/Carousel4.jpeg",
    ];

    return (
        <div className={style.container}>
            <Carousel
                showArrows={false}
                showThumbs={false}       
                showStatus={false}   
                infiniteLoop    
                autoPlay                  
                interval={5000}          
                transitionTime={2000}     
            >
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`carousel-slide-${index}`} />
                    </div>
                ))}
            </Carousel>
            <div className={style.info}>
                <h1 className={style.title}>ДеЕлектроник</h1>
                <p className={style.content}>
                    Официален партньор и дистрибутор на Машини Husqvarna.
                </p>
            </div>
        </div>
    );
};
