import styles from "./Advantages.module.scss";
import slide1 from "../../assets/images/Slide1.png";
import slide2 from "../../assets/images/Slide2.png";
import slide3 from "../../assets/images/Slide3.jpg";
import slide4 from "../../assets/images/Slide4.png";

export const Advantages = ({ advRef }) => {
  return (
    <section ref={advRef} className={styles.advantages}>
      <h2 className={styles.title}>Dlaczego warto powierzyć nam swoje okna?</h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={slide1} alt="#" />
          <h3 className={styles.itemTitle}>Doświadczenie zawodowe 10 lat</h3>
          <p className={styles.itemDesc}>
            W tym czasie zgromadziliśmy zespół wykwalifikowanych specjalistów,
            którzy o naprawie okien wiedzą absolutnie wszystko.
          </p>
        </div>
        <div className={styles.item}>
          <img src={slide2} alt="#" />
          <h3 className={styles.itemTitle}>
            Naprawa okien o dowolnej złożoności
          </h3>
          <p className={styles.itemDesc}>
            Nasi eksperci potrafią naprawić okna absolutnie każdego rodzaju.
          </p>
        </div>
        <div className={styles.item}>
          <img src={slide3} alt="#" />
          <h3 className={styles.itemTitle}>Oficjalna gwarancja na pracę</h3>
          <p className={styles.itemDesc}>
            Na wszystkie wykonane prace udzielamy oficjalnej gwarancji.
          </p>
        </div>
        <div className={styles.item}>
          <img src={slide4} alt="#" />
          <h3 className={styles.itemTitle}>Czystość i porządek</h3>
          <p className={styles.itemDesc}>
            Wszystkie prace wykonujemy bardzo ostrożnie, po nas nie będzie
            stosów śmieci.
          </p>
        </div>
      </div>
    </section>
  );
};
