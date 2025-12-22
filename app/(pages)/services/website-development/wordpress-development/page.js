import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import CoreServices from "./CoreServices/CoreServices";
import EcommerceServices from "./EcommerceServices/EcommerceServices";
import ProcessSteps from "@/app/(components)/process-steps/ProcessSteps";
import SupportServices from "@/app/(components)/support-services/SupportServices";
import IndustriesWeServe from "./IndustriesWeServe/IndustriesWeServe";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import Faqs from "@/app/(components)/faqs/Faqs";

export default function WordPressDevelopment() {
  const customBannerData = bannerData.wordpress_development;
  const companiesData = CompaniesList.website_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          Trusted WordPress Development Company | Custom WordPress Development Services
        </title>
        <meta
          name="description"
          content="Partner with a leading WordPress development company for custom, secure, and scalable websites. Hire expert developers to boost your ROI today."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/wordpress-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Trusted WordPress Development Company | Custom WordPress Development Services" />
        <meta
          property="og:description"
          content="Partner with a leading WordPress development company for custom, secure, and scalable websites. Hire expert developers to boost your ROI today."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Trusted WordPress Development Company | Custom WordPress Development Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading WordPress development company for custom, secure, and scalable websites. Hire expert developers to boost your ROI today."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <CustomBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
        background={customBannerData.background}
        isLongContent={true}
      />
      <WhyChooseUs />
      <CoreServices />
      <EcommerceServices />
      <ProcessSteps type="wordpress_development" />
      <SupportServices type="wordpress_development" />
      <IndustriesWeServe />
      <CompaniesSlider
        title="Trusted by Companies Across Industries"
        images={companiesData.images}
        description="We have delivered reliable work for organisations of all sizes, across sectors including consulting, finance, sustainability, media, healthcare, and technology."
        basePath={companiesData.basePath}
      />
      <CaseStudies type="wordpress_development" />
      <Testimonials list={TestimonialList.wordpress_development} />
      <Faqs type="wordpress_development" />
    </React.Fragment>
  );
}
