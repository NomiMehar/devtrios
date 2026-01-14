"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import styles from "./CaseStudies.module.scss";
import data from "./CaseStudiesList.json";

export default function CaseStudies({ type }) {
  const caseData = data[type];

  if (!caseData) {
    return null;
  }

  return (
    <div className={styles.case_studies}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{caseData.heading.title}</h2>
            <p>{caseData.heading.description}</p>
            {caseData.subheading && <p className={styles.subheading}>{caseData.subheading}</p>}
          </div>

          <div className={styles.slider_container}>
            <Swiper
              spaceBetween={20}
              pagination={caseData.projects.length > 1 ? { clickable: true } : false}
              navigation={caseData.projects.length > 1}
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              className={`caseStudiesSwiper ${styles.case_studies_swiper} ${type === "website_development" ? styles.no_padding : ""}`}
            >
              {caseData.projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.case_study_card}>
                    <div className={styles.image_section}>
                      {(project.images && project.images.length > 0) || project.image ? (
                        <div className={styles.image_gallery_wrapper}>
                          <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={(project.images && project.images.length > 1) ? { clickable: true } : false}
                            navigation={false}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                              pauseOnMouseEnter: true
                            }}
                            loop={(project.images && project.images.length > 1) ? true : false}
                            modules={[Pagination, Autoplay]}
                            className={styles.image_gallery_swiper}
                          >
                            {project.images && project.images.length > 0 ? (
                              project.images.map((img, imgIndex) => (
                                <SwiperSlide key={imgIndex}>
                                  <div className={styles.image_wrapper}>
                                    <Image
                                      src={img}
                                      alt={`${project.title} - Image ${imgIndex + 1}`}
                                      width={800}
                                      height={600}
                                      className={styles.project_image}
                                    />
                                    <div className={styles.image_overlay}></div>
                                  </div>
                                </SwiperSlide>
                              ))
                            ) : (
                              <SwiperSlide>
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
                              </SwiperSlide>
                            )}
                          </Swiper>
                        </div>
                      ) : null}
                      <div className={styles.image_content}>
                        <h4>{project.title}</h4>
                        <p className={styles.industry}>{project.industry}</p>
                      </div>
                    </div>
                    <div className={styles.content_section}>
                      <div className={styles.content_wrapper}>
                        {/* Case Study structure: challenge, solution, outcomes, closingText */}
                        {project.challenge && (
                          <>
                            <div className={styles.summary_box}>
                              <h5>Challenge:</h5>
                              <p className={styles.summary}>{project.challenge}</p>
                            </div>
                            {project.solution && (
                              <div className={styles.technical_box}>
                                <h5>Solution:</h5>
                                <p>{project.solution}</p>
                              </div>
                            )}
                            {project.outcomes && project.outcomes.length > 0 && (
                              <div className={styles.results_box}>
                                <h5>Outcome:</h5>
                                <ul>
                                  {project.outcomes.map((outcome, idx) => (
                                    <li key={idx}>
                                      <span className={styles.check_icon}>✓</span>
                                      <span>{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.closingText && (
                              <div className={styles.closing_box}>
                                <p className={styles.closing_text}>{project.closingText}</p>
                              </div>
                            )}
                            {type === "website_development" && (
                              <div className={styles.cta_box}>
                                <Button href="/get-a-quote">
                                  Request a Quote
                                </Button>
                              </div>
                            )}
                          </>
                        )}
                        
                        {/* WordPress structure: summary, technicalFocus, results */}
                        {project.summary && !project.scope && !project.challenge && (
                          <>
                            <div className={styles.summary_box}>
                              <h5>Project Summary</h5>
                              <p className={styles.summary}>{project.summary}</p>
                            </div>
                            {project.technicalFocus && !project.cta && (
                              <div className={styles.technical_box}>
                                <h5>Technical Focus</h5>
                                <p>{project.technicalFocus}</p>
                              </div>
                            )}
                            {project.results && project.results.length > 0 && (
                              <div className={styles.results_box}>
                                <h5>Key Results</h5>
                                <ul>
                                  {project.results.map((result, idx) => (
                                    <li key={idx}>
                                      <span className={styles.check_icon}>✓</span>
                                      <span dangerouslySetInnerHTML={{ __html: result }} />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.cta && (
                              <div className={styles.cta_box}>
                                <Button href={project.cta.link}>
                                  {project.cta.text}
                                </Button>
                              </div>
                            )}
                          </>
                        )}
                        
                        {/* Shopify structure: scope, summary, outcome, cta */}
                        {project.scope && !project.challenge && (
                          <>
                            <div className={styles.summary_box}>
                              <h5>Scope</h5>
                              <p className={styles.summary}>{project.scope}</p>
                            </div>
                            {project.summary && (
                              <div className={styles.technical_box}>
                                <h5>Summary</h5>
                                <p>{project.summary}</p>
                              </div>
                            )}
                            {project.outcome && (
                              <div className={styles.results_box}>
                                <h5>Key Outcome</h5>
                                <p>{project.outcome}</p>
                              </div>
                            )}
                            {project.cta && (
                              <div className={styles.cta_box}>
                                <Button href={project.cta.link}>
                                  {project.cta.text}
                                </Button>
                              </div>
                            )}
                          </>
                        )}
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

