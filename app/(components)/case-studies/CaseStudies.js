"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/(components)/button/Button";
import styles from "./CaseStudies.module.scss";
import data from "./CaseStudiesList.json";

// Function to generate URL-friendly slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function CaseStudies({ type }) {
  const caseData = data[type];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!caseData) {
    return null;
  }

  // Get all projects for the swiper
  const displayProjects = caseData.projects;

  return (
    <div className={styles.case_studies}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{caseData.heading.title}</h2>
            <p>{caseData.heading.description}</p>
          </div>

          <div className={styles.cards_swiper}>
            <Swiper
              spaceBetween={0}
              slidesPerView="auto"
              className={styles.swiper_container}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => {
                // Set initial active index
                setActiveIndex(0);
              }}
            >
              {displayProjects.map((project, index) => {
                const isActive = activeIndex === index;
                const mainImage = project.images && project.images.length > 0 
                  ? project.images[0] 
                  : project.image;
                
                // Create tags from industry and technicalFocus
                const tags = [];
                if (project.industry) {
                  const industryParts = project.industry.split(" and ");
                  tags.push(...industryParts);
                }
                if (project.technicalFocus) {
                  const techTerms = project.technicalFocus.split(",").slice(0, 2);
                  tags.push(...techTerms.map(t => t.trim()));
                }

                return (
                  <SwiperSlide 
                    key={index}
                    className={`${styles.case_card} ${isActive ? styles.active : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className={styles.card_image_section}>
                      <Image
                        src={mainImage}
                        alt={project.title}
                        width={600}
                        height={520}
                        className={styles.card_image}
                      />
                    </div>

                    <div className={styles.card_content}>
                      {tags.length > 0 && (
                        <div className={styles.content_tags}>
                          {tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className={`${styles.tag} ${tagIndex === 0 ? styles.tag_first : styles.tag_other}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h4 className={styles.content_title}>{project.title}</h4>

                      {project.cta ? (
                        <div className={styles.content_link}>
                          <Button href={project.cta.link}>
                            {project.cta.text}
                          </Button>
                        </div>
                      ) : (
                        <div className={styles.content_link}>
                          <Link href={`/case-studies/${generateSlug(project.title)}`}>
                            Read Article
                            <span className={styles.content_link_icon}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6743 7.51783C15.2981 7.51783 14.7997 7.50949 14.1792 7.50949C12.6659 7.50949 11.4216 6.25699 11.4216 4.72949V2.04949C11.4216 1.83866 11.2533 1.66699 11.0445 1.66699H6.63668C4.57963 1.66699 2.91699 3.35533 2.91699 5.42449V14.4037C2.91699 16.5745 4.65884 18.3337 6.80831 18.3337H13.3722C15.4218 18.3337 17.0837 16.6562 17.0837 14.5853V7.89283C17.0837 7.68116 16.9162 7.51033 16.7066 7.51116C16.3542 7.51366 15.9318 7.51783 15.6743 7.51783" fill="white"/>
                                <path d="M13.4039 2.13947C13.1547 1.88031 12.7197 2.05864 12.7197 2.41781V4.61531C12.7197 5.53697 13.4789 6.29531 14.4006 6.29531C14.9814 6.30197 15.7881 6.30364 16.4731 6.30197C16.8239 6.30114 17.0022 5.88197 16.7589 5.62864C15.8797 4.71447 14.3056 3.07614 13.4039 2.13947" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.4784 9.48986H10.2992C10.6417 9.48986 10.9201 9.21236 10.9201 8.86986C10.9201 8.52736 10.6417 8.24902 10.2992 8.24902H7.4784C7.1359 8.24902 6.8584 8.52736 6.8584 8.86986C6.8584 9.21236 7.1359 9.48986 7.4784 9.48986ZM7.47848 13.6517H12.0151C12.3576 13.6517 12.636 13.3742 12.636 13.0317C12.636 12.6892 12.3576 12.4109 12.0151 12.4109H7.47848C7.13598 12.4109 6.85848 12.6892 6.85848 13.0317C6.85848 13.3742 7.13598 13.6517 7.47848 13.6517Z" fill="#0f0f10"/>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>

                    <div className={styles.card_bottom_link}>
                      {project.cta ? (
                        <Button href={project.cta.link}>
                          {project.cta.text}
                        </Button>
                      ) : (
                        <Link href={`/case-studies/${generateSlug(project.title)}`}>
                          Read Article
                          <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.6743 7.51783C15.2981 7.51783 14.7997 7.50949 14.1792 7.50949C12.6659 7.50949 11.4216 6.25699 11.4216 4.72949V2.04949C11.4216 1.83866 11.2533 1.66699 11.0445 1.66699H6.63668C4.57963 1.66699 2.91699 3.35533 2.91699 5.42449V14.4037C2.91699 16.5745 4.65884 18.3337 6.80831 18.3337H13.3722C15.4218 18.3337 17.0837 16.6562 17.0837 14.5853V7.89283C17.0837 7.68116 16.9162 7.51033 16.7066 7.51116C16.3542 7.51366 15.9318 7.51783 15.6743 7.51783" fill="#0f0f10"/>
                              <path d="M13.4039 2.13947C13.1547 1.88031 12.7197 2.05864 12.7197 2.41781V4.61531C12.7197 5.53697 13.4789 6.29531 14.4006 6.29531C14.9814 6.30197 15.7881 6.30364 16.4731 6.30197C16.8239 6.30114 17.0022 5.88197 16.7589 5.62864C15.8797 4.71447 14.3056 3.07614 13.4039 2.13947" fill="#0f0f10"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.4784 9.48986H10.2992C10.6417 9.48986 10.9201 9.21236 10.9201 8.86986C10.9201 8.52736 10.6417 8.24902 10.2992 8.24902H7.4784C7.1359 8.24902 6.8584 8.52736 6.8584 8.86986C6.8584 9.21236 7.1359 9.48986 7.4784 9.48986ZM7.47848 13.6517H12.0151C12.3576 13.6517 12.636 13.3742 12.636 13.0317C12.636 12.6892 12.3576 12.4109 12.0151 12.4109H7.47848C7.13598 12.4109 6.85848 12.6892 6.85848 13.0317C6.85848 13.3742 7.13598 13.6517 7.47848 13.6517Z" fill="#fff"/>
                            </svg>
                          </span>
                        </Link>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className={styles.view_more_wrapper}>
            <Button icon={"/assets/images/home/arrow-circle-right.webp"} href={`/case-studies`}>
              View More Insights
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
