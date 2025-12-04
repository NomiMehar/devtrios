import React from "react";
import style from "./AboutDevtrios.module.scss";

export default function AboutDevtrios({ title, description }) {
  return (
    <React.Fragment>
      <div className={style.about_devtrios}>
        <div className="container">
          <div className={style.content_wrapper}>
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
