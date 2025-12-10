import React from "react";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import VisionMission from "@/app/(pages)/about-us/vision-mission/VisionMission";
import OurValues from "@/app/(pages)/about-us/our-values/OurValues";
import HowWeWork from "@/app/(pages)/about-us/how-we-work/HowWeWork";
import DevtriosExperts from "@/app/(pages)/about-us/devtrios-experts/DevtriosExperts";
import WorldwideSolution from "@/app/(pages)/about-us/worldwide-solution/WorldwideSolution";
export default function AboutUs() {
  const customBannerData = bannerData.about;
  const companiesData = CompaniesList.about;
  return (
    <React.Fragment>
      <CustomBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
        background={customBannerData.background}
      />
      <CompaniesSlider
        title={companiesData.title}
        images={companiesData.images}
        basePath={companiesData.basePath}
        description={companiesData.description}
      />
      <VisionMission />
      <OurValues />
      <HowWeWork />
      <DevtriosExperts />
      <WorldwideSolution />
      <Testimonials list={TestimonialList.about_us} />
    </React.Fragment>
  );
}
