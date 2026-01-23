"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudyCard.module.scss";

// Function to generate URL-friendly slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function CaseStudyCard({ study }) {
  const mainImage = study.images && study.images.length > 0 
    ? study.images[0] 
    : study.image;

  // Create tags from industry
  const tags = [];
  if (study.industry) {
    const industryParts = study.industry.split(" and ");
    tags.push(...industryParts.slice(0, 2));
  }

  return (
    <article className={styles.case_study_card}>
      <Link href={`/case-studies/${study.slug}`} className={styles.card_link}>
        <div className={styles.imageWrapper}>
          <Image
            src={mainImage}
            alt={study.title}
            width={600}
            height={400}
            className={styles.card_image}
          />
          {tags.length > 0 && (
            <div className={styles.tags_container}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.card_content}>
          <h2 className={styles.title}>{study.title}</h2>
          {study.summary && (
            <p className={styles.description}>{study.summary}</p>
          )}
          {study.industry && (
            <div className={styles.card_footer}>
              <span className={styles.card_meta}>
                {study.industry}
              </span>
              <span className={styles.read_more}>View Case Study →</span>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
