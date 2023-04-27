import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./Reviews.module.scss";
import Slider from "react-slick";
import image from "../../assets/images/reviews.svg";
import { Rating } from "primereact/rating";
import { ReviewsService } from "../../core/services/reviews.service";

export const Reviews = ({ revRef }) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = useCallback(async () => {
    await ReviewsService.getAll()
      .then((res) => {
        console.log(res);
        setReviews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section ref={revRef} className={styles.reviews}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <span style={{ color: "var(--green)" }}>PRAWDZIWE RECENZJE</span>
          <br />
          KLIENTÓW O NASZEJ PRACY
        </h2>
        <img src={image} className={styles.img} alt="" />
      </div>

      <Slider className={styles.slider} {...settings} ref={sliderRef}>
        {reviews.map((review, index) => (
          <div className={styles.rewiev} key={index}>
            <div className={styles.rewievHead}>
              <p className={styles.author}>{review.author}</p>
              <Rating value={review.star} readOnly cancel={false} />
            </div>
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
