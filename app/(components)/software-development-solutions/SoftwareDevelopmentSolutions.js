"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SoftwareDevelopmentSolutions.module.scss";
import dataMap from "./SoftwareDevelopmentSolutionsList.json";
import Button from "@/app/(components)/button/Button";

export default function SoftwareDevelopmentSolutions({
  type = "web_app_solutions",
}) {
  const data = dataMap[type] || dataMap.web_app_solutions;

  if (!data) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = data.solutions[activeIndex] || data.solutions[0];

  return (
    <section className={styles.web_app_solutions}>
      <div className="container">
        <div className={styles.section_header}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>
        <div className={styles.content_wrapper}>
          {/* Left column - interactive cards */}
          <div className={styles.left_column}>
            {data.solutions.map((solution, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={solution.title}
                  className={`${styles.solution_card} ${
                    isActive ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <h3 className={styles.card_title}>{solution.title}</h3>

                  {solution.points && solution.points.length > 0 ? (
                    <ul className={styles.points_list}>
                      {solution.points.map((point, idx) => {
                        const [rawLabel, ...restParts] = point.split(":");
                        const hasLabel = restParts.length > 0;

                        if (hasLabel) {
                          const label = `${rawLabel.trim()}:`;
                          const rest = restParts.join(":").trim();

                          return (
                            <li key={idx}>
                              <strong>{label}</strong>
                              {rest ? ` ${rest}` : ""}
                            </li>
                          );
                        }

                        return <li key={idx}>{point}</li>;
                      })}
                    </ul>
                  ) : (
                    solution.description
                      .split("\n\n")
                      .map((block, idx) => (
                        <p key={idx} className={styles.card_description}>
                          {block}
                        </p>
                      ))
                  )}

                  {isActive && (
                    <div className={styles.card_footer}>
                      <Button
                        href="/get-a-quote"
                        icon="/assets/images/home/arrow-circle-right.webp"
                      >
                        Get a free Quote
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right column - sticky preview image */}
          <div className={styles.right_column}>
            <div className={styles.image_wrapper} key={activeIndex}>
              <Image
                src={activeSolution.image || data.image}
                alt={activeSolution.title}
                width={900}
                height={700}
                className={styles.preview_image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

