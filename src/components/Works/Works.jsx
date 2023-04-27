import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./Works.module.scss";
import Slider from "react-slick";
import { ImagesService } from "../../core/services/images.service";

import { Image } from "primereact/image";

export const Works = ({ worksRef }) => {
  const sliderRef = useRef();

  const [images, setImages] = useState([]);

  const getImages = useCallback(async () => {
    await ImagesService.getAll()
      .then((res) => {
        setImages(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

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

  // const images = [
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1cJDQ5Pxha2t_wZGHT_Vfa9JWgamzExCU",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  //   {
  //     src: "https://drive.google.com/uc?export=view&id=1kfz9mgKbtj8DHV360I-WRN2sXwHXT0hg",
  //     alt: "photo",
  //   },
  // ];

  return (
    <section ref={worksRef} className={styles.works}>
      <h2 className={styles.title}>
        <span style={{ color: "var(--green)" }}>ZDJĘCIA</span> NASZYCH PRAC
      </h2>

      <Slider {...settings} ref={sliderRef}>
        {images?.map((image, index) => (
          <Image
            width="100%"
            height="100%"
            key={index}
            className={styles.img}
            src={`https://drive.google.com/uc?export=view&id=${image?.src}`}
            alt={image?.alt}
            preview
          />
        ))}
      </Slider>
    </section>
  );
};
