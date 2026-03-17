import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SoftwareDevelopmentSolutions from "@/app/(components)/software-development-solutions/SoftwareDevelopmentSolutions";
import SoftwareDevelopmentServicesFor from "@/app/(components)/software-development-services-for/SoftwareDevelopmentServicesFor";
import SoftwareDevelopmentProcess from "@/app/(components)/software-development-process/SoftwareDevelopmentProcess";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";

export default function WebAppDevelopment() {
  const bannerData = ServiceBannerList.web_app_development;
  const ctaData = CtaList.web_app_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Web App Development Services | Scalable, High-Performance Solutions
        </title>
        <meta
          name="description"
          content="Custom web application development services built to scale, secure, and perform reliably. High-performance web apps designed to solve unique business challenges and drive efficiency, growth, and user engagement."
        />
        <link rel="canonical" href="https://devtrios.com/services/software-development/web-app-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Web App Development Services | Scalable, High-Performance Solutions" />
        <meta
          property="og:description"
          content="Custom web application development services built to scale, secure, and perform reliably. High-performance web apps designed to solve unique business challenges and drive efficiency, growth, and user engagement."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Web App Development Services | Scalable, High-Performance Solutions" />
        <meta
          name="twitter:description"
          content="Custom web application development services built to scale, secure, and perform reliably. High-performance web apps designed to solve unique business challenges and drive efficiency, growth, and user engagement."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SoftwareDevelopmentSolutions type="web_app_solutions" />
      <SoftwareDevelopmentProcess type="web_app_development" />
      <SoftwareDevelopmentServicesFor type="web_app_development" />
      <CaseStudies type="web_app_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="web_app_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
