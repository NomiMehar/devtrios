import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import ServiceList from "@/app/(components)/service-list/ServiceList";
import ServiceListList from "@/app/(components)/service-list/ServiceListList.json";
import ProcessSection from "@/app/(components)/process-section/ProcessSection";
import ProcessSectionList from "@/app/(components)/process-section/ProcessSectionList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";
import WebsiteTechStack from "@/app/(components)/website-tech-stack/WebsiteTechStack";


export default function MobileAppDevelopment() {
  const bannerData = ServiceBannerList.mobile_app_development;
  const serviceListData = ServiceListList.mobile_app_development;
  const ctaData = CtaList.mobile_app_development;
  const processData = ProcessSectionList.mobile_app_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Mobile App Development Services | Scalable, High-Performance Applications
        </title>
        <meta
          name="description"
          content="Professional mobile app development services for businesses building consumer and enterprise-grade applications. We design and develop mobile apps focused on usability, performance, security, and long-term growth."
        />
        <link rel="canonical" href="https://devtrios.com/services/mobile-app-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Mobile App Development Services | Scalable, High-Performance Applications" />
        <meta
          property="og:description"
          content="Professional mobile app development services for businesses building consumer and enterprise-grade applications. We design and develop mobile apps focused on usability, performance, security, and long-term growth."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Mobile App Development Services | Scalable, High-Performance Applications" />
        <meta
          name="twitter:description"
          content="Professional mobile app development services for businesses building consumer and enterprise-grade applications. We design and develop mobile apps focused on usability, performance, security, and long-term growth."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <CaseStudies type="mobile_app_development" />
      <ProcessSection data={processData} />
      <OurExpertise />
      <WebsiteTechStack type="mobile_app_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="mobile_app_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
