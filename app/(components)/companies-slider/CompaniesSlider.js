"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import style from "./CompaniesSlider.module.scss";

export default function CompaniesSlider({
  title,
  description,
  images,
  basePath,
}) {
  return (
    <React.Fragment>
      <div
        className={`trusted_companies_slider ${style.trusted_companies_slider}`}
      >
        <div className={style.content_wrapper}>
          <div className="container">
            <h2>{title}</h2>
            {description && (
              <p dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`${basePath}${img}`}
                alt={img}
                width={1000}
                height={1000}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
}
