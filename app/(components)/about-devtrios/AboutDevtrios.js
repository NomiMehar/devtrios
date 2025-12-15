import React from "react";
import style from "./AboutDevtrios.module.scss";

export default function AboutDevtrios({ title, description }) {
  return (
    <React.Fragment>
      <div className={style.about_devtrios}>
        <div className="container">
          <div className={style.content_wrapper}>
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
