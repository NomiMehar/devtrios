"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CaseStudiesHeader from "@/app/(components)/case-studies-list/CaseStudiesHeader";
import CaseStudiesGrid from "@/app/(components)/case-studies-list/CaseStudiesGrid";
import CaseStudiesPagination from "@/app/(components)/case-studies-list/CaseStudiesPagination";
import styles from "./CaseStudiesPage.module.scss";
import CaseStudiesList from "@/app/(components)/case-studies/CaseStudiesList.json";

// Function to generate URL-friendly slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function CaseStudiesContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams?.get('type') || 'all';
  
  const [selectedType, setSelectedType] = useState(typeParam);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const caseStudiesPerPage = 6;

  // Flatten all case studies from all types
  const allCaseStudies = useMemo(() => {
    const studies = [];
    for (const [type, caseData] of Object.entries(CaseStudiesList)) {
      if (caseData?.projects && Array.isArray(caseData.projects)) {
        caseData.projects.forEach(project => {
          studies.push({
            ...project,
            type,
            slug: generateSlug(project.title)
          });
        });
      }
    }
    return studies;
  }, []);

  // Get unique types for tabs
  const types = useMemo(() => {
    return ['all', ...Object.keys(CaseStudiesList)];
  }, []);

  // Filter case studies based on type and search
  const filteredCaseStudies = useMemo(() => {
    return allCaseStudies.filter((study) => {
      const matchesType = selectedType === 'all' || study.type === selectedType;
      const matchesSearch =
        searchQuery === "" ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.industry?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.technicalFocus?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedType, searchQuery, allCaseStudies]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredCaseStudies.length / caseStudiesPerPage);
  const startIndex = (currentPage - 1) * caseStudiesPerPage;
  const endIndex = startIndex + caseStudiesPerPage;
  const displayedCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, searchQuery]);

  // Update selected type when URL param changes
  useEffect(() => {
    if (typeParam && typeParam !== selectedType) {
      setSelectedType(typeParam);
    }
  }, [typeParam]);

  return (
    <>
      <CaseStudiesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <section className={styles.case_studies_page}>
        <div className="container">
          <div className={styles.type_tabs_wrapper}>
            <div className={styles.type_tabs}>
              {types.map((type) => (
                <button
                  key={type}
                  className={`${styles.type_tab} ${
                    selectedType === type ? styles.active : ""
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type === 'all' ? 'All' : type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.main_content}>
            <div className={styles.left_section}>
              <CaseStudiesGrid caseStudies={displayedCaseStudies} />
              <CaseStudiesPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <p>Loading case studies...</p>
      </div>
    }>
      <CaseStudiesContent />
    </Suspense>
  );
}
