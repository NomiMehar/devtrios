import React from "react";
import styles from "./VisionMission.module.scss";
import data from "./VisionMissionList.json";
export default function VisionMission() {
  return (
    <div className={styles.vision_mission}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.story}>
            <h3>{data.story.title}</h3>
            <p>{data.story.description}</p>
          </div>

          <div className={styles.vision}>
            <h3>{data.mission.title}</h3>
            <p>{data.mission.description}</p>
          </div>

          <div className={styles.mission}>
            <h3>{data.vision.title}</h3>
            <p>{data.vision.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
