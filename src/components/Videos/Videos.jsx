import styles from "./Videos.module.scss";
import Slider from "react-slick";
import { useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { VideosService } from "../../core/services/videos.service";

export const Videos = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = useCallback(async () => {
    await VideosService.getAll()
      .then((res) => {
        setVideos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
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
    <section className={styles.works}>
      <h2 className={styles.title}>
        <span style={{ color: "var(--green)" }}>WIDEO</span> NASZEJ PRACY
      </h2>
      <Slider {...settings}>
        {videos?.map((video, index) => (
          <video
            onClick={() => handleOnClick(index)}
            key={index}
            className={classNames(styles.link, {
              [styles.active]: activeIndex === index,
            })}
            preload="auto"
            controls={activeIndex === index ? true : false}
            autoPlay
            muted
            loop
          >
            <source
              src={`https://drive.google.com/uc?export=view&id=${video?.src}`}
              type="video/mp4"
            />
          </video>
        ))}
      </Slider>
    </section>
  );
};
