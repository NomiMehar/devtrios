import React from "react";
import Image from "next/image";
import style from "./Banner.module.scss";
import Button from "@/app/(components)/button/Button";

export default function Banner() {
  return (
    <React.Fragment>
      <div
        className={`flex direction-column justify-center ${style.banner_wrapper}`}
      >
        <div className="flex direction-column container">
          <section className={style.banner_content}>
            <h1 className="font-white">Web & App Development</h1>
            <div
              className={`flex justify-center ${style.banner_content_wrapper}`}
            >
              <h2>Experts in London</h2>
              <p className="font-white">
                <strong>200+</strong> projects delivered across web, mobile,
                AI,marketing and cloud. We help startups and enterprises turn
                ideas into scalable digital products
              </p>
            </div>
            <div className={`flex justify-center ${style.banner_content_btn}`}>
              <Button
                href="/contact-us"
                icon="/assets/images/home/arrow-circle-right.svg"
              >
                Book a Strategy Call
              </Button>

              <Button
                href="/services"
                icon="/assets/images/home/arrow-circle-right.svg"
                variant="secondary"
              >
                View Our Services
              </Button>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
