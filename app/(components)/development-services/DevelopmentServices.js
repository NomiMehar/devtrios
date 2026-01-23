"use client";

import style from "./DevelopmentServices.module.scss"
import React from "react";
import DevelopmentServicesData from "./DevelopmentServicesData.json";

export default function DevelopmentServices({ type = "wordpress_development" }) {
    const data = DevelopmentServicesData[type] || DevelopmentServicesData.wordpress_development;

    if (!data) {
        return null;
    }

    return(
      <div className={`flex flex-wrap ${style.development_services}`}>
      <div className="container">
          <div className={style.section_title}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
          </div>
          <div className={`${style.development_services_text}`}>
              <section>
                  <span><small>{data.firstService.number}</small> {data.firstService.title}</span>
              </section>
              <section className={style.left_section}>
                  <p>{data.firstServiceDescription}</p>
              </section>
              <section className={style.right_section}>
                  <ul className="list-none">
                      {data.services && data.services.map((service, index) => (
                          <li key={index}>
                              <span><small>{service.number}</small> {service.title}</span>
                              <p>{service.description}</p>
                          </li>
                      ))}
                  </ul>
              </section>
          </div>
      </div>
  </div>
    )
}