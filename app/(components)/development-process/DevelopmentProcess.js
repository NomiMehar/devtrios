"use client";
import React, { useState } from "react";
import style from "./DevelopmentProcess.module.scss";
import Image from "next/image";
export default function DevelopmentProcess(props) {
    const [tabs, setTabs] = useState(0);
  return (
    <div className={`flex direction-column ${style.development_wrapper} ${style[props.classes]}`}>
    <div className="container">
        <div className={style.section_title}>
            <h2>{props.appName}</h2>
            <p>{props.description}</p>
        </div>
        <div className={`flex items-center justify-between ${style.process_tabs}`}>
            <div className={`flex ${style.process_tabs_content}`}>
              {
                props.DevelopmentProcessList?.map(({process_number, process_name, process_description}, index) => 
                  tabs === index && (
                        <section key={`tab-content-${index}`}>
                            <span>{process_number}</span>
                            <h3>{process_name}</h3>
                            <p>{process_description}</p>
                        </section>
                    )
                )
              }
            </div>
            <div className={`flex direction-column ${style.process_tabs_list}`}>
                <ul className="flex direction-column list-none">
                  {
                    props.DevelopmentProcessList?.map(({process_name}, index) => (
                        <li key={`step-${index}`} className="flex justify-center direction-column">
                            <button
                                onClick={() => setTabs(index)}
                                className={tabs === index ? style.active : ""}
                            >
                                {process_name}
                            </button>
                        </li>
                    ))
                  }
                </ul>
            </div>
            {
                props.DevelopmentProcessList?.map(({process_image}, index) => 
                   tabs === index && (
                        <Image 
                            className={style.process_image}  
                            key={`process-image-${index}`} 
                            src={process_image} 
                            width={1000} 
                            height={1000} 
                            alt={`Step ${index + 1} illustration`} 
                        />
                    )
                )
            }
        </div>
    </div>
</div>
  );
}
