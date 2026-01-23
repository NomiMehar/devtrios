"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import CaseStudiesList from "@/app/(components)/case-studies/CaseStudiesList.json";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import styles from "./CaseStudyDetail.module.scss";

// Function to generate URL-friendly slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function CaseStudyDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [project, setProject] = useState(null);
  const [caseType, setCaseType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Find case study by slug
  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    try {
      const normalizedSlug = decodeURIComponent(String(slug)).toLowerCase().trim();
      let foundProject = null;
      let foundType = null;

      // Search through all case studies
      for (const [type, caseData] of Object.entries(CaseStudiesList)) {
        if (!caseData?.projects || !Array.isArray(caseData.projects)) continue;

        foundProject = caseData.projects.find(p => {
          if (!p || !p.title) return false;
          const projectSlug = generateSlug(p.title);
          return projectSlug === normalizedSlug;
        });

        if (foundProject) {
          foundType = type;
          break;
        }
      }

      setProject(foundProject);
      setCaseType(foundType);
    } catch (error) {
      console.error('Error finding case study:', error);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  // Update document title
  useEffect(() => {
    if (project?.title) {
      document.title = `${project.title} - Case Study | Devtrios`;
    }
  }, [project]);

  // Loading state
  if (isLoading) {
    return (
      <div className={styles.case_study_detail}>
        <div className="container">
          <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <p>Loading case study...</p>
          </div>
        </div>
      </div>
    );
  }

  // No slug provided
  if (!slug) {
    return (
      <div className={styles.not_found}>
        <div className="container">
          <h1>Case Study Not Found</h1>
          <p>No slug provided in URL</p>
          <Link href="/">Go Back Home</Link>
        </div>
      </div>
    );
  }

  // Project not found
  if (!project) {
    return (
      <div className={styles.not_found}>
        <div className="container">
          <h1>Case Study Not Found</h1>
          <p>Could not find a case study with slug: <strong>{slug}</strong></p>
          <Link href="/">Go Back Home</Link>
        </div>
      </div>
    );
  }

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

  // Get case study type name for breadcrumbs
  const getTypeName = (type) => {
    const typeNames = {
      wordpress_development: "WordPress Development",
      ecommerce_development: "E-commerce Development",
      custom_web_development: "Custom Web Development",
    };
    return typeNames[type] || "Case Studies";
  };

  // Function to parse and bold numbers in results
  const parseResults = (text) => {
    if (!text) return text;
    // Match numbers with optional % or other units
    return text.replace(/(\d+(?:\.\d+)?\s*(?:%|percent|seconds?|minutes?|hours?|days?|months?|years?|times?|x)?)/gi, '<strong>$1</strong>');
  };

  // Get CTA data
  const ctaData = CtaList.services || CtaList.home;

  return (
    <div className={styles.case_study_detail}>
      {/* Header Section with Gradient */}
      <div className={styles.header_section}>
        <div className="container">

          {/* Header Content: Image Left, Text Right */}
          <div className={styles.header_content}>
            <div className={styles.header_text_content}>
              {/* Breadcrumbs */}
              <nav className={styles.breadcrumbs}>
                <Link href="/case-studies">Case Studies</Link>
                <span className={styles.breadcrumb_separator}>→</span>
                <span className={styles.breadcrumb_current}>{project.title}</span>
              </nav>
              {/* Title */}
              <h1 className={styles.case_study_title}>{project.title}</h1>
              {/* Metadata */}
              {project.industry && (
                <div className={styles.metadata}>
                  <div className={styles.meta_item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
                    </svg>
                    <span>{project.industry}</span>
                  </div>
                  {project.technicalFocus && (
                    <div className={styles.meta_item}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                      </svg>
                      <span>{project.technicalFocus.split(",")[0].trim()}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {tags.length > 0 && (
                <div className={styles.tags_container}>
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${styles.tag} ${tagIndex === 0 ? styles.tag_primary : styles.tag_secondary}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {mainImage && (
              <div className={styles.header_image_wrapper}>
                <Image
                  src={mainImage}
                  alt={project.title}
                  width={600}
                  height={600}
                  className={styles.header_image}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.content_layout}>
          {/* Main Content */}
          <div className={styles.main_content}>
            {/* Special Cards: Project Summary and Technical Focus in one line */}
            {(project.summary || project.technicalFocus) && (
              <div className={styles.special_cards_grid}>
                {project.summary && (
                  <div className={styles.special_card}>
                    <div className={styles.card_icon_wrapper}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3>Project Summary</h3>
                    <p>{project.summary}</p>
                  </div>
                )}

                {project.technicalFocus && (
                  <div className={styles.special_card}>
                    <div className={styles.card_icon_wrapper}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3>Technical Focus</h3>
                    <p>{project.technicalFocus}</p>
                  </div>
                )}
              </div>
            )}

            {/* Key Results - Full Width */}
            {project.results && project.results.length > 0 && (
              <div className={styles.key_results_section}>
                <div className={styles.special_card}>
                  <div className={styles.card_icon_wrapper}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Key Results</h3>
                  <ul>
                    {project.results.map((result, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: parseResults(result) }} />
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Content Sections */}
            {(project.challenge || project.solution || (project.outcomes && project.outcomes.length > 0)) && (
              <div className={styles.case_study_content_wrapper}>
                <div className={styles.case_study_content}>
                  {project.challenge && (
                    <div>
                      <h2>Challenge</h2>
                      <p>{project.challenge}</p>
                    </div>
                  )}

                  {project.solution && (
                    <div>
                      <h2>Solution</h2>
                      <p>{project.solution}</p>
                    </div>
                  )}

                  {project.outcomes && project.outcomes.length > 0 && (
                    <div>
                      <h2>Outcomes</h2>
                      <ul>
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {project.images && project.images.length > 1 && (
              <div className={styles.gallery_section}>
                <h2>Project Gallery</h2>
                <div className={styles.gallery_grid}>
                  {project.images.slice(1).map((img, idx) => (
                    <div
                      key={idx}
                      className={styles.gallery_item}
                      onClick={() => setLightboxImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Image ${idx + 2}`}
                        width={600}
                        height={400}
                        className={styles.gallery_image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
      {/* CTA Section */}
      <div className={styles.cta_wrapper}>
        <Cta data={ctaData} />
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxImage(null)}
        >
          <div className={styles.lightbox_content}>
            <button
              className={styles.lightbox_close}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Image
              src={lightboxImage}
              alt={`${project.title} - Full Size`}
              width={1200}
              height={800}
              className={styles.lightbox_image}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
