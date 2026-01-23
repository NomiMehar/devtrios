"use client";

import React from "react";
import styles from "./CaseStudiesHeader.module.scss";

export default function CaseStudiesHeader({ 
  searchQuery, 
  onSearchChange 
}) {
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className="container">
          <div className={styles.header_top_content}>
            <h1 className={styles.case_studies_title}>Case Studies</h1>
            <div className={styles.search_bar}>
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button className={styles.search_button} type="button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
