import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ type, isLoading, btnText, event, src }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      disabled={isLoading ? true : false}
      onClick={event}
      className={classNames(
        styles.btn,
        {
          [styles.loading]: isLoading,
        },
        { [styles.formBtn]: type === "submit" },
        { [styles.couponBtn]: src === "coupon" }
      )}
    >
      <p className={styles.btnText}>{btnText}</p>
    </button>
  );
};
