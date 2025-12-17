import React from "react";
import styles from "./AppFeaturedCase.module.scss"
import AppFeaturedCaseList from "@/app/(components)/app-featured-case/AppFeaturedCaseList.json";
import Image from "next/image"

export default function AppFeaturedCase(){
  const title = AppFeaturedCaseList.title;
  const sections = AppFeaturedCaseList.sections;
  const section_image = AppFeaturedCaseList.img;

  return (
    <section className={styles.app_featured_case}>
      <div className="container">
        <h2 className={styles.heading}>Featured Case</h2>
        <div className={styles.grid}>
          <div className={styles.left_grid}>
            <h3 className={styles.title}>{title}</h3>
            {
              sections.map((section, sectionIndex)=>(
                <div className={styles.section} key={sectionIndex}>
                  <h2 className={styles.section_title} >{section.section_title}</h2>
                  
                  {section.badges.map((badgeText, badgeIndex)=>(
                    <span className={styles.section_badge} key={badgeIndex}>{badgeText}</span>
                  ))}
                </div>
              ))
            }
          </div>
          <div className={styles.image_wrapper}>
              <Image
                src={section_image}
                alt="web_developmet_image"
                width={1000}
                height={1000}
              />
          </div>
        </div>
      </div>
    </section>
  )
}