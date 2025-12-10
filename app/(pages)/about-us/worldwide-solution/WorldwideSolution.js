import React from "react";
import styles from "./WorldwideSolution.module.scss";
import data from "./WorldwideSolutionList.json";
export default function WorldwideSolution() {
  return (
    <div className={styles.worldwide_solution}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.story}>
            <h3 dangerouslySetInnerHTML={{ __html: data.story.title }} />
          </div>
        </div>
      </div>
    </div>
  );
}
