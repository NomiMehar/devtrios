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
                                <a href={project.cta.link} className={styles.cta_button}>
                                  {project.cta.text}
                                </a>
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
                                <a href={project.cta.link} className={styles.cta_button}>
                                  {project.cta.text}
                                </a>
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

