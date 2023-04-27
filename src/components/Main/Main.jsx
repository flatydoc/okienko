import { Coupon } from "../Coupon/Coupon";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>NAPRAWA OKIEN WYSOKIEJ JAKOŚCI</h1>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <i
              className="pi pi-check"
              style={{ fontSize: "1.5rem", color: "var(--green)" }}
            ></i>
            Regulacja okien
          </li>
          <li className={styles.listItem}>
            <i
              className="pi pi-check"
              style={{ fontSize: "1.5rem", color: "var(--green)" }}
            ></i>
            Wymiana szyby
          </li>
        </ul>
      </div>
      <div className={styles.coupon_wrapper}>
        <Coupon />
      </div>
    </div>
  );
};
