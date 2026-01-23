"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./WebsiteTechStack.module.scss";
import techData from "./WebsiteTechStackList.json";

export default function WebsiteTechStack({ type = "website_development" }) {
  const serviceData = techData[type] || techData.website_development;
  const categories = Object.keys(serviceData.categories || {});
  const [active, setActive] = useState(categories[0] || "");
  const [isAnimating, setIsAnimating] = useState(false);
  const tabRefs = useRef({});
  const indicatorRef = useRef(null);

  useEffect(() => {
    // Update indicator position when active tab changes
    if (indicatorRef.current && tabRefs.current[active]) {
      const activeTab = tabRefs.current[active];
      const tabsContainer = activeTab.parentElement;
      if (tabsContainer) {
        const containerRect = tabsContainer.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        indicatorRef.current.style.width = `${tabRect.width}px`;
        indicatorRef.current.style.left = `${tabRect.left - containerRect.left}px`;
      }
    }
  }, [active, categories]);

  // Initial setup and handle window resize
  useEffect(() => {
    const updateIndicator = () => {
      if (indicatorRef.current && tabRefs.current[active]) {
        const activeTab = tabRefs.current[active];
        const tabsContainer = activeTab.parentElement;
        if (tabsContainer) {
          const containerRect = tabsContainer.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          
          indicatorRef.current.style.width = `${tabRect.width}px`;
          indicatorRef.current.style.left = `${tabRect.left - containerRect.left}px`;
        }
      }
    };

    // Initial setup
    const timer = setTimeout(updateIndicator, 100);
    
    // Handle window resize
    window.addEventListener('resize', updateIndicator);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [active, categories.length]);

  const handleTabChange = (cat) => {
    if (cat === active || isAnimating) return;
    
    setIsAnimating(true);
    
    // Change tab immediately
    setActive(cat);
    
    // Reset animation flag after a short delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  if (!serviceData) {
    return null;
  }

  return (
    <div className={styles.tech_stack}>
      <div className="container">
        <h2 className={styles.heading}>{serviceData.title}</h2>
        <p className={styles.description}>
          {serviceData.description}
        </p>

        <div className={styles.divider}></div>

        {/* Category Tabs */}
        {categories.length > 0 && (
          <div className={styles.tabs_wrapper}>
            <div className={styles.tabs} role="tablist">
              <span 
                ref={indicatorRef}
                className={styles.tab_indicator}
                aria-hidden="true"
              />
              {categories.map((cat) => (
                <button
                  key={cat}
                  ref={(el) => (tabRefs.current[cat] = el)}
                  role="tab"
                  aria-selected={active === cat}
                  className={`${styles.tab} ${active === cat ? styles.active : ""}`}
                  onClick={() => handleTabChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Technology Logos */}
        {active && serviceData.categories[active] && (
          <div className={styles.logos_container}>
            <div className={styles.logos_row} key={active}>
              {serviceData.categories[active].map((tech, i) => (
                <div key={i} className={styles.logo_item}>
                  <div className={styles.logo_image}>
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span className={styles.logo_name}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
