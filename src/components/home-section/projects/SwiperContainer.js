import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ReadMoreBtn from "../../buttons/ReadMoreBtn";
import { projects } from "./data";

const SwiperContainer = () => {
  return (
    <Swiper
      className="projects-swiper"
      spaceBetween={15}
      slidesPerView={1}
      breakpoints={{
        1400: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 1.3,
        },
        800: {
          slidesPerView: 1.5,
        },
      }}
      style={{ marginRight: "0" }}
    >
      {projects.map((project) => {
        const { header, text, image, id, url } = project;
        return (
          <SwiperSlide className="swiper-slide-content" key={id}>
            <div className="swiper-slide-img">
              <img src={image} alt="slider-img" />
            </div>
            <span className="swiper-slide-footer">
              <p style={{ fontSize: "2rem" }}>{header}</p>
              <p>{text}</p>
              <ReadMoreBtn url={url} />
            </span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperContainer;
