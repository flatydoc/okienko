import classNames from "classnames";
import { Advantages } from "../../components/Advantages/Advantages";
import { Calculator } from "../../components/Calculator/Calculator";
import { Final } from "../../components/Final/Final";
import { Form } from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import { Map } from "../../components/Map/Map";
import { Reviews } from "../../components/Reviews/Reviews";
import { Videos } from "../../components/Videos/Videos";
import { Works } from "../../components/Works/Works";
import styles from "./HomePage.module.scss";

export const HomePage = ({
  advRef,
  worksRef,
  revRef,
  formRef,
  calcRef,
  mapRef,
}) => {
  return (
    <>
      <Main />
      <Advantages advRef={advRef} />
      <Calculator calcRef={calcRef} />
      <div className={classNames(styles.image, styles.image_1)}></div>
      <Works worksRef={worksRef} />
      <Videos />
      <Form formRef={formRef} />
      <div className={classNames(styles.image, styles.image_2)}></div>
      <div className={styles.wrapper}>
        <Reviews revRef={revRef} />
        <Final />
      </div>
      <Map mapRef={mapRef} />
    </>
  );
};
