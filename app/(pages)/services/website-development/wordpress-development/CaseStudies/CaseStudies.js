"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./CaseStudies.module.scss";
import data from "./CaseStudiesList.json";

export default function CaseStudies() {
  return (
    <div className={styles.case_studies}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.slider_container}>
            <Swiper
              // autoplay={{
              //   delay: 6000,
              //   disableOnInteraction: false,
              // }}
              spaceBetween={20}
              pagination={{ clickable: true }}
              navigation={true}
              // loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              className={`caseStudiesSwiper ${styles.case_studies_swiper}`}
            >
              {data.projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.case_study_card}>
                    <div className={styles.image_section}>
                      {project.image && (
                        <div className={styles.image_wrapper}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className={styles.project_image}
                          />
                          <div className={styles.image_overlay}></div>
                        </div>
                      )}
                      <div className={styles.image_content}>
                        <div className={styles.project_number}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h4>{project.title}</h4>
                        <p className={styles.industry}>{project.industry}</p>
                      </div>
                    </div>
                    <div className={styles.content_section}>
                      <div className={styles.content_wrapper}>
                        <div className={styles.summary_box}>
                          <h5>Project Summary</h5>
                          <p className={styles.summary}>{project.summary}</p>
                        </div>
                        <div className={styles.technical_box}>
                          <h5>Technical Focus</h5>
                          <p>{project.technicalFocus}</p>
                        </div>
                        <div className={styles.results_box}>
                          <h5>Key Results</h5>
                          <ul>
                            {project.results.map((result, idx) => (
                              <li key={idx}>
                                <span className={styles.check_icon}>✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
