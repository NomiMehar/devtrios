import React from "react";
import styles from "./MigrationServices.module.scss";
import data from "./MigrationServicesList.json";

export default function MigrationServices() {
  return (
    <div className={styles.migration_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.content_wrapper}>
            <div className={styles.content_section}>
              <div className={styles.content_block}>
                <p className={styles.description}>{data.content.description}</p>
              </div>
            </div>

            <div className={styles.highlight_section}>
              <div className={styles.highlight_wrapper}>
                <div className={styles.highlight_icon_wrapper}>
                  <div className={styles.highlight_icon}></div>
                </div>
                <div className={styles.highlight_content}>
                  <div className={styles.highlight_label}>SEO Protection</div>
                  <p className={styles.highlight_text}>{data.content.highlight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

