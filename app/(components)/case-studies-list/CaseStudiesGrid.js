"use client";

import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import styles from "./CaseStudiesGrid.module.scss";

export default function CaseStudiesGrid({ caseStudies }) {
  if (caseStudies.length === 0) {
    return (
      <div className={styles.no_results}>
        <p>No case studies found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.case_studies_grid}>
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={`${study.type}-${index}`} study={study} />
      ))}
    </div>
  );
}
