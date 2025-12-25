import React from "react";
import Image from "next/image";
import style from "./Banner.module.scss";
import Button from "@/app/(components)/button/Button";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="container">
      <div
        className={`flex direction-column justify-center ${style.banner_wrapper}`}
      >
        <div className="container">
          <section className={style.banner_content}>
            <h1 className="font-white">Software, AI & Automation
            Engineering Partner</h1>
              <p className="font-white">
                <strong>200+</strong> projects delivered across web, mobile,
                AI,marketing and cloud. We help startups and enterprises turn
                ideas into scalable digital products
              </p>
            <div className={`${style.banner_content_btn}`}>
              <Button
                href="/contact-us"
                icon="/assets/images/home/arrow-circle-right.webp"
              >
                Book a Strategy Call
              </Button>

              <Button
                href="/services"
                icon="/assets/images/home/arrow-circle-right.webp"
                variant="secondary"
              >
                View Our Services
              </Button>
            </div>
          </section>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
