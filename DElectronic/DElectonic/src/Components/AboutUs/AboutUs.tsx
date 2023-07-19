import style from './AboutUs.module.css';

export const AboutUs = () => {
    return(
        <div className={style.container}>
            <div className={style.info}>
                <h1 className={style.title}>Кои сме ние?</h1>
                <p className={style.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit facilis error harum aliquid veniam in consequuntur aut architecto labore sapiente quam praesentium, excepturi quaerat explicabo suscipit minima. Saepe, quae.</p>
            </div>
        </div>
    );
}