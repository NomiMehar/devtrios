import React from "react";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import OurServices from "@/app/(pages)/services/OurServices/OurServices";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import Blogs from "@/app/(components)/blogs/Blogs";
import Faqs from "@/app/(components)/faqs/Faqs";

export default function Services() {
  const customBannerData = bannerData.services;
  const companiesData = CompaniesList.services;
  const ctaData = CtaList.services;

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
      <OurServices />
      <Testimonials list={TestimonialList.about_us} />
      <Cta data={ctaData} />
      <Blogs />
      <Faqs type="services" />
    </React.Fragment>
  );
}
